// Project schema (SRE/DevOps portfolio template):
//   title:        Project name
//   problem:      The real problem this solved — for whom, and why it mattered (1–2 sentences)
//   architecture: High-level system design — components, data flow, deployment topology
//   tools:        Array of tools/tech (Kubernetes, Terraform, GitHub Actions, AWS, etc.)
//   contribution: What you specifically owned and shipped (scope vs. team work)
//   impact:       Quantified outcome where possible — uptime, MTTR, deploy freq, cost, latency
//   image:        Path to project image in /public/images
//   live:         Live demo URL (optional)
//   visit:        Source code URL (optional)
//   id:           Unique numeric id
//
// Keep entries crisp; metrics over adjectives.

export const projects = [];

export const experience = [
  {
    slug: 'icipe',
    company: 'ICIPE — International Centre of Insect Physiology and Ecology',
    role: 'Systems and Cloud Solutions Architect',
    start: 'June 2022',
    end: 'Present',
    location: 'Nairobi, Kenya',
    summary:
      'SRE and platform engineering across ICIPE&apos;s cloud and Kubernetes systems &mdash; production cluster operations, GitOps delivery with ArgoCD (App-of-Apps) and Flux on adjacent projects, Terraform IaC, GitHub Actions CI/CD, and satellite-data pipelines (COGs on S3, indexed via Open Data Cube, processed by Argo Workflows). I also ship application code on the platforms I run. Vector Atlas is one open-source example I can point to publicly.',
    detailHref: '/experience/icipe',
    repos: [
      { label: 'icipe-official/vectoratlas-software-code', url: 'https://github.com/icipe-official/vectoratlas-software-code' },
      { label: 'icipe-official/VA-Cube-Configs', url: 'https://github.com/icipe-official/VA-Cube-Configs' },
    ],
    site: 'https://vectoratlas.icipe.org/about',
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Started Snakebite Diagnosis Project' },
  { year: 2022, text: 'Graduated with BSc. Computer Technology, JKUAT' },
  { year: 2022, text: 'Joined ICIPE as Systems and Cloud Solutions Architect' },
  { year: 2024, text: 'Earned AWS Certified Solutions Architect – Associate' },
  { year: 2025, text: 'Earned Kubernetes and Cloud Native Associate (KCNA)' },
];
