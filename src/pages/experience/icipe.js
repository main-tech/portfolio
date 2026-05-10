import Link from 'next/link';

import Seo, { SITE_NAME, SITE_URL } from '../../components/Seo/Seo';
import { Layout } from '../../layout/Layout';
import {
  BackLink,
  Body,
  Bullet,
  Bullets,
  ExternalLink,
  Eyebrow,
  LinkRow,
  Meta,
  Pill,
  Pills,
  SectionH2,
  Title,
  Wrapper,
} from '../../components/ExperienceDetail/ExperienceDetailStyles';
import { experience } from '../../constants/constants';

const job = experience.find((e) => e.slug === 'icipe');

const description =
  'Cloud and Kubernetes platform engineering at ICIPE — GitOps with ArgoCD, satellite-data pipelines on Open Data Cube and Argo Workflows, Terraform IaC, and GitHub Actions CI/CD.';

const jobJsonLd = job && {
  '@context': 'https://schema.org',
  '@type': 'WorkExperience',
  name: `${job.role} — ${job.company}`,
  description,
  url: `${SITE_URL}/experience/icipe`,
  worksFor: {
    '@type': 'Organization',
    name: job.company,
  },
  jobLocation: {
    '@type': 'Place',
    address: job.location,
  },
  startDate: job.start,
  endDate: job.end,
  employee: {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const ICIPE = () => {
  if (!job) return null;

  return (
    <Layout>
      <Seo
        title={`ICIPE — ${job.role}`}
        description={description}
        path="/experience/icipe"
        type="article"
        jsonLd={jobJsonLd}
      />

      <Wrapper>
        <Link href="/#experience" passHref legacyBehavior>
          <BackLink>&larr; Back to Experience</BackLink>
        </Link>

        <Eyebrow>{job.start} &mdash; {job.end} &middot; {job.location}</Eyebrow>
        <Title>{job.role}</Title>
        <Meta>{job.company}</Meta>

        <SectionH2>The role</SectionH2>
        <Body>
          The work is primarily SRE and platform engineering &mdash; running production
          Kubernetes, owning the GitOps delivery path, automating infrastructure with Terraform,
          and operating the satellite-data pipelines that ICIPE&apos;s research depends on. I also
          ship application code on the platforms I run. The work spans multiple internal systems;
          Vector Atlas is the example I can point to publicly because it&apos;s open source.
        </Body>

        <SectionH2>Scope of work</SectionH2>
        <Bullets>
          <Bullet>
            <strong>Kubernetes platform operations.</strong> Run production clusters that host
            ICIPE&apos;s research and data services &mdash; cluster lifecycle, workload topology,
            ingress/Gateway API, secrets and workload identity, rolling deploys, and incident
            response.
          </Bullet>
          <Bullet>
            <strong>GitOps with ArgoCD (App-of-Apps).</strong> ArgoCD is the primary GitOps
            controller I run; Flux is in use on adjacent projects. Bootstrap manifests track
            parent applications in Git; child applications are reconciled from chart and manifest
            repositories without manual <code>kubectl</code>.
          </Bullet>
          <Bullet>
            <strong>Infrastructure as Code with Terraform.</strong> Cloud resources, IAM, and
            cluster-adjacent infrastructure provisioned and versioned as code, with state managed
            for safe collaboration.
          </Bullet>
          <Bullet>
            <strong>CI/CD on GitHub Actions.</strong> PR CI, container image build &amp; push,
            secret syncing to clusters, and automated image-tag updates that ArgoCD reconciles.
          </Bullet>
          <Bullet>
            <strong>Satellite-data pipelines.</strong> Cloud Optimized GeoTIFFs (COGs) live on S3
            and are indexed in place via Open Data Cube; Argo Workflows orchestrates ingestion and
            processing jobs against that data on Kubernetes &mdash; no bulk transfer, no
            duplicated state. Results are published through tile servers and OGC web services.
          </Bullet>
          <Bullet>
            <strong>Software engineering on the application stack.</strong> Ship features across
            TypeScript / Next.js frontends, NestJS / GraphQL APIs, and Python ingestion / back-end
            services running on the platforms.
          </Bullet>
          <Bullet>
            <strong>Vector Atlas (open-source example).</strong> One of the platforms I run, and
            the one I can point to publicly. Author and maintain the Helm chart and ArgoCD
            application that deploy its full service topology &mdash; UI, API, ingestion API,
            tileserver, Python backend, analytics, Redis, Postgres, and ingress &mdash; and ship
            application code across the UI, API, and deployment workflows. Live at{' '}
            <ExternalLink href="https://vectoratlas.icipe.org/about" target="_blank" rel="noopener noreferrer">
              vectoratlas.icipe.org
            </ExternalLink>
            .
          </Bullet>
        </Bullets>

        <SectionH2>Stack</SectionH2>
        <Pills>
          <Pill>Kubernetes</Pill>
          <Pill>ArgoCD (App-of-Apps)</Pill>
          <Pill>Flux</Pill>
          <Pill>Argo Workflows</Pill>
          <Pill>Helm</Pill>
          <Pill>Terraform</Pill>
          <Pill>AWS (EKS, S3, RDS)</Pill>
          <Pill>GitHub Actions</Pill>
          <Pill>Docker</Pill>
          <Pill>Gateway API</Pill>
          <Pill>Traefik</Pill>
          <Pill>Open Data Cube</Pill>
          <Pill>COGs / GeoTIFF</Pill>
          <Pill>GeoServer</Pill>
          <Pill>PostgreSQL / PostGIS</Pill>
          <Pill>Redis</Pill>
          <Pill>Next.js / TypeScript</Pill>
          <Pill>NestJS / GraphQL</Pill>
          <Pill>Python</Pill>
        </Pills>

        <SectionH2>Public repositories</SectionH2>
        <Body>
          Some of the platform work is open-source. The links below point to the public Vector
          Atlas application code and its Helm chart / ArgoCD configuration.
        </Body>
        <LinkRow>
          {job.repos.map((r) => (
            <ExternalLink key={r.url} href={r.url} target="_blank" rel="noopener noreferrer">
              {r.label}
            </ExternalLink>
          ))}
          <ExternalLink href={job.site} target="_blank" rel="noopener noreferrer">
            Live platform
          </ExternalLink>
        </LinkRow>

        <SectionH2>Reliability and operational practice</SectionH2>
        <Body>
          Deployments are rolling updates reconciled by ArgoCD; secrets live in the cluster
          (never in Git) and are surfaced through Helm values and workload-identity webhooks.
          Image tags are bumped by automated workflows and reconciled on the next sync. Stateful
          workloads (Postgres, Redis) are isolated from stateless application pods, with storage
          and lifecycle managed separately so stateless rollouts stay fast and safe.
        </Body>
      </Wrapper>
    </Layout>
  );
};

export default ICIPE;
