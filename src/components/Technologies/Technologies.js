import React from 'react';
import { FaAws, FaSatellite, FaLayerGroup } from 'react-icons/fa';
import {
  SiKubernetes,
  SiTerraform,
  SiDocker,
  SiNginx,
  SiTraefikproxy,
  SiGithubactions,
  SiArgo,
  SiFlux,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiGnubash,
  SiTypescript,
  SiPostgresql,
  SiLinux,
  SiNextdotjs,
  SiGdal,
} from 'react-icons/si';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const skillGroups = [
  {
    category: 'Cloud & Infrastructure',
    description:
      'Production cluster operation, multi-cloud IaC, and the systems that keep workloads running.',
    items: [
      { icon: <SiKubernetes size="2.5rem" />, name: 'Kubernetes', note: 'Production clusters, workloads, debugging' },
      { icon: <SiTerraform size="2.5rem" />, name: 'Terraform', note: 'Multi-cloud IaC, modules, state management' },
      { icon: <FaAws size="2.5rem" />, name: 'AWS', note: 'EKS, EC2, RDS, S3, IAM, networking' },
      { icon: <SiLinux size="2.5rem" />, name: 'Linux', note: 'Sysadmin, performance tuning, troubleshooting' },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    description:
      'Pipelines and delivery infrastructure for shipping safely, frequently, and reversibly.',
    items: [
      { icon: <SiGithubactions size="2.5rem" />, name: 'GitHub Actions', note: 'Reusable workflows, deployment gates' },
      { icon: <SiArgo size="2.5rem" />, name: 'ArgoCD', note: 'Primary GitOps controller — App-of-Apps pattern' },
      { icon: <SiFlux size="2.5rem" />, name: 'Flux', note: 'GitOps reconciliation on additional projects' },
      { icon: <SiArgo size="2.5rem" />, name: 'Argo Workflows', note: 'Job orchestration for data pipelines on K8s' },
      { icon: <SiDocker size="2.5rem" />, name: 'Docker', note: 'Hardened images, multi-stage builds' },
      { icon: <SiHelm size="2.5rem" />, name: 'Helm', note: 'Templated K8s releases and rollouts' },
      { icon: <SiNginx size="2.5rem" />, name: 'Nginx', note: 'Ingress, reverse proxy, TLS termination' },
      { icon: <SiTraefikproxy size="2.5rem" />, name: 'Traefik', note: 'Dynamic routing, service discovery' },
    ],
  },
  {
    category: 'SRE & Observability',
    description:
      'The signals, runbooks, and post-incident learning loops that keep production honest.',
    items: [
      { icon: <SiPrometheus size="2.5rem" />, name: 'Prometheus', note: 'Metrics, SLOs, alerting' },
      { icon: <SiGrafana size="2.5rem" />, name: 'Grafana', note: 'Dashboards, visual triage' },
    ],
  },
  {
    category: 'Programming & Automation',
    description:
      'Languages and tooling I use to automate operations and ship product features when needed.',
    items: [
      { icon: <SiPython size="2.5rem" />, name: 'Python', note: 'Automation, internal services, glue' },
      { icon: <SiGnubash size="2.5rem" />, name: 'Bash', note: 'Ops scripting, runbooks, CI shims' },
      { icon: <SiTypescript size="2.5rem" />, name: 'TypeScript', note: 'Internal tools and product features' },
      { icon: <SiNextdotjs size="2.5rem" />, name: 'Next.js', note: 'Dashboards and product surfaces' },
    ],
  },
  {
    category: 'Geospatial & Earth Observation',
    description:
      'Satellite imagery pipelines &mdash; COGs on S3, indexed in place with ODC, processed on Kubernetes, served through OGC web services.',
    items: [
      { icon: <FaSatellite size="2.5rem" />, name: 'Open Data Cube (ODC)', note: 'In-place indexing of COGs on S3 with STAC metadata' },
      { icon: <FaLayerGroup size="2.5rem" />, name: 'Cloud Optimized GeoTIFFs', note: 'Streamed satellite imagery on S3, no bulk transfer' },
      { icon: <FaLayerGroup size="2.5rem" />, name: 'GeoServer', note: 'OGC web services (WMS/WFS/WCS) for processed layers' },
      { icon: <SiGdal size="2.5rem" />, name: 'GDAL / Rasterio', note: 'Geospatial format conversion and raster processing' },
    ],
  },
  {
    category: 'Data & Systems Engineering',
    description:
      'Stateful systems &mdash; backed up, replicated, and recoverable.',
    items: [
      { icon: <SiPostgresql size="2.5rem" />, name: 'PostgreSQL / PostGIS', note: 'Relational and geospatial workloads' },
    ],
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Core Skills</SectionTitle>
    <SectionText>
      Grouped by where the work happens &mdash; cloud and cluster, pipeline and delivery, signal and
      response, automation and product, data and state.
    </SectionText>

    {skillGroups.map((group) => (
      <div key={group.category} style={{ marginBottom: '3rem' }}>
        <ListTitle style={{ marginBottom: 8 }}>{group.category}</ListTitle>
        <ListParagraph style={{ marginBottom: 24 }}>{group.description}</ListParagraph>
        <List>
          {group.items.map((item) => (
            <ListItem key={item.name}>
              <ListContainer>
                {item.icon}
                <ListTitle>{item.name}</ListTitle>
                <ListParagraph>{item.note}</ListParagraph>
              </ListContainer>
            </ListItem>
          ))}
        </List>
      </div>
    ))}
  </Section>
);

export default Technologies;
