import React from 'react';

import {
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Field = ({ label, children }) => (
  <div style={{ padding: '0 1.5rem', marginBottom: '0.75rem', textAlign: 'left' }}>
    <span
      style={{
        color: '#9cc9e3',
        fontWeight: 600,
        fontSize: '0.95rem',
        letterSpacing: '0.05em',
      }}
    >
      {label}
    </span>
    <div style={{ color: '#e4e6e7', fontSize: '0.95rem', lineHeight: '1.4rem', marginTop: 4 }}>
      {children}
    </div>
  </div>
);

const ComingSoon = () => (
  <div
    style={{
      width: '100%',
      padding: '4rem 2rem',
      textAlign: 'center',
      borderRadius: 12,
      border: '1px dashed rgba(255, 255, 255, 0.18)',
      background: 'rgba(71, 74, 87, 0.25)',
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: '1.25rem',
      lineHeight: 1.6,
    }}
  >
    <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
      Projects coming soon
    </div>
    Selected SRE, DevOps, and platform engineering projects will be published here &mdash; framed by
    problem, architecture, contribution, and measurable impact.
  </div>
);

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      Production systems, internal tooling, and independent engineering work &mdash; framed by
      problem, architecture, and measurable impact.
    </SectionText>
    {projects.length === 0 ? (
      <div style={{ padding: '0 3rem 3rem' }}>
        <ComingSoon />
      </div>
    ) : (
      <GridContainer>
        {projects.map(
          ({ id, image, title, problem, architecture, tools, contribution, impact, live, visit }) => (
            <BlogCard key={id}>
              {image && <Img src={image} alt={title} />}
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>

              {problem && <Field label="Problem">{problem}</Field>}
              {architecture && <Field label="Architecture">{architecture}</Field>}
              {contribution && <Field label="My Contribution">{contribution}</Field>}
              {impact && <Field label="Impact">{impact}</Field>}

              {tools && tools.length > 0 && (
                <div>
                  <TitleContent>Tools</TitleContent>
                  <TagList>
                    {tools.map((tool, i) => (
                      <Tag key={i}>{tool}</Tag>
                    ))}
                  </TagList>
                </div>
              )}

              <UtilityList>
                {visit && <ExternalLinks href={visit}>Code</ExternalLinks>}
                {live && <ExternalLinks href={live}>Live</ExternalLinks>}
              </UtilityList>
            </BlogCard>
          ),
        )}
      </GridContainer>
    )}
  </Section>
);

export default Projects;
