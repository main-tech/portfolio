#!/usr/bin/env node
/*
 * Build-time fetch of SLI data (uptime, latency, deploy info) for the footer badge.
 * Runs as `prebuild` — see package.json. Never throws; failures degrade silently.
 *
 * Env vars (set in Cloudflare Pages dashboard, all optional):
 *   BETTERSTACK_API_TOKEN   Bearer token from Better Stack > Account > API tokens
 *   BETTERSTACK_MONITOR_ID  Numeric id of the mandela.dev monitor
 *   CF_PAGES_COMMIT_SHA     Auto-injected by Cloudflare Pages at build time
 *   CF_PAGES_BRANCH         Auto-injected by Cloudflare Pages at build time
 */
const fs = require('fs');
const path = require('path');

const OUTPUT = path.join(__dirname, '..', 'src', 'generated', 'sli.json');

const fmtDate = (d) => d.toISOString().slice(0, 10);

async function fetchBetterStack() {
  const token = process.env.BETTERSTACK_API_TOKEN;
  const monitorId = process.env.BETTERSTACK_MONITOR_ID;
  if (!token || !monitorId) return {};

  const headers = { Authorization: `Bearer ${token}` };
  const now = new Date();
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const base = `https://uptime.betterstack.com/api/v2/monitors/${encodeURIComponent(monitorId)}`;

  try {
    const [slaRes, monitorRes] = await Promise.all([
      fetch(`${base}/sla?from=${fmtDate(from)}&to=${fmtDate(now)}`, { headers }),
      fetch(base, { headers }),
    ]);

    const sla = slaRes.ok ? await slaRes.json() : null;
    const monitor = monitorRes.ok ? await monitorRes.json() : null;

    const attrs = monitor?.data?.attributes ?? {};
    const availability =
      sla?.data?.attributes?.availability ??
      sla?.data?.attributes?.uptime ??
      null;
    const latency =
      attrs.last_checked_response_time_ms ??
      attrs.average_response_time_ms ??
      null;

    return {
      uptime30d: availability != null ? Number(availability) : null,
      latencyMs: latency != null ? Math.round(Number(latency)) : null,
      status: attrs.status || 'unknown',
    };
  } catch (err) {
    console.warn('[fetch-sli] Better Stack fetch failed:', err.message);
    return {};
  }
}

function readDeploy() {
  return {
    commitSha: process.env.CF_PAGES_COMMIT_SHA || null,
    branch: process.env.CF_PAGES_BRANCH || null,
  };
}

(async () => {
  try {
    const sli = {
      uptime30d: null,
      latencyMs: null,
      status: 'unknown',
      commitSha: null,
      branch: null,
      builtAt: new Date().toISOString(),
      ...(await fetchBetterStack()),
      ...readDeploy(),
    };
    fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
    fs.writeFileSync(OUTPUT, JSON.stringify(sli, null, 2) + '\n');
    console.log('[fetch-sli] wrote', path.relative(process.cwd(), OUTPUT));
  } catch (err) {
    console.warn('[fetch-sli] unexpected error, leaving sli.json untouched:', err.message);
    process.exit(0);
  }
})();
