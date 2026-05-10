import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle as="h1" main center>
        Mandela Muithi <br />
        Site Reliability & DevOps Engineer
      </SectionTitle>
      <SectionText>
        I design, automate, and operate the infrastructure that production systems depend on
        &mdash; Kubernetes clusters, CI/CD pipelines, and cloud environments built for reliability
        at scale. Software engineering foundation, infrastructure-first focus.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
