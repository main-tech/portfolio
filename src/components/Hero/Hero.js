import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Mandela Mitau <br />
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
