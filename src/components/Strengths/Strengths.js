import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Card, CardBody, CardTitle, Grid } from './StrengthsStyles';

const strengths = [
  {
    title: 'Reliability Engineering',
    body: 'Design for failure first. Assume every component can and will fail, and reduce blast radius accordingly &mdash; redundancy, isolation, graceful degradation.',
  },
  {
    title: 'Incident Response & Debugging',
    body: 'Calm under pressure, structured triage, post-incident learning over blame. Production debugging across distributed systems and stateful workloads.',
  },
  {
    title: 'Automation-First Thinking',
    body: 'If it has been done twice manually, it should be a script. If it has been scripted twice, it should be a pipeline. Toil is a bug, not a workflow.',
  },
  {
    title: 'Scalability & System Design',
    body: 'Capacity, latency, and consistency tradeoffs evaluated up front, not patched in later. Operational empathy baked into the platforms I build.',
  },
];

const Strengths = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Key Strengths</SectionTitle>
    <SectionText>The SRE mindset I bring to every system I touch.</SectionText>
    <Grid>
      {strengths.map((s) => (
        <Card key={s.title}>
          <CardTitle>{s.title}</CardTitle>
          <CardBody dangerouslySetInnerHTML={{ __html: s.body }} />
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Strengths;
