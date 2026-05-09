import React from 'react';
import Link from 'next/link';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';
import {
  ExpCard,
  ExpCompany,
  ExpDates,
  ExpHeader,
  ExpLink,
  ExpLinkPrimary,
  ExpLinks,
  ExpList,
  ExpLocation,
  ExpRole,
  ExpSummary,
} from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle>Work Experience</SectionTitle>
    <SectionText>
      Where I&apos;ve operated production systems and built reliability into them.
    </SectionText>
    <ExpList>
      {experience.map((job) => (
        <ExpCard key={`${job.company}-${job.start}`}>
          <ExpHeader>
            <ExpRole>{job.role}</ExpRole>
            <ExpDates>
              {job.start} &mdash; {job.end}
            </ExpDates>
          </ExpHeader>
          <ExpCompany>
            {job.company}
            {job.location && <ExpLocation>{job.location}</ExpLocation>}
          </ExpCompany>
          {job.summary && <ExpSummary dangerouslySetInnerHTML={{ __html: job.summary }} />}
          <ExpLinks>
            {job.detailHref && (
              <Link href={job.detailHref} passHref legacyBehavior>
                <ExpLinkPrimary>Read full breakdown &rarr;</ExpLinkPrimary>
              </Link>
            )}
            {job.site && (
              <ExpLink href={job.site} target="_blank" rel="noopener noreferrer">
                Live platform
              </ExpLink>
            )}
            {job.repos &&
              job.repos.map((r) => (
                <ExpLink key={r.url} href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.label}
                </ExpLink>
              ))}
          </ExpLinks>
        </ExpCard>
      ))}
    </ExpList>
  </Section>
);

export default Experience;
