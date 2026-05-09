import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle>About</SectionTitle>
    <SectionText>
      I&apos;m an engineer focused on building systems that stay up, recover fast, and scale
      predictably. My work sits at the intersection of infrastructure, automation, and production
      engineering &mdash; operating Kubernetes clusters on AWS, codifying environments with
      Terraform, and shipping services through hardened CI/CD pipelines.
    </SectionText>
    <SectionText>
      I think in terms of failure modes, blast radius, and recovery paths. I treat manual work as a
      bug, observability as a first-class feature, and incident response as a craft. Alongside
      infrastructure, I build product features and internal tooling &mdash; which keeps me close to
      the engineers using the platforms I run.
    </SectionText>
    <SectionText>
      I work across both employed and independent engineering contexts, including entrepreneurial
      projects where I own systems end-to-end: from cluster provisioning to deployment automation
      to production debugging at 2 AM.
    </SectionText>
  </Section>
);

export default About;
