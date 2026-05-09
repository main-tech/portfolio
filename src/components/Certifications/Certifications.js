import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  BadgeWrap,
  CertCard,
  CertGrid,
  CertIssuer,
  CertName,
  CertNote,
  CertStatus,
} from './CertificationsStyles';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    status: 'completed',
    note: 'Designing resilient, cost-optimized AWS architectures across compute, storage, and networking.',
    badgeId: '3c4e65e7-becc-4ba0-8440-3386e5ac4630',
  },
  {
    name: 'Kubernetes and Cloud Native Associate (KCNA)',
    issuer: 'CNCF / Linux Foundation',
    status: 'completed',
    note: 'Foundational knowledge of Kubernetes, cloud-native architecture, and the CNCF ecosystem.',
    badgeId: 'd49aa99a-ec71-43d8-9443-6fe52e91f8e0',
  },
];

const renderBadge = (badgeId) => `
  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${badgeId}" data-share-badge-host="https://www.credly.com"></div>
`;

const Certifications = () => {
  React.useEffect(() => {
    if (!certifications.some((c) => c.badgeId)) return;
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Certifications</SectionTitle>
      <SectionText>Verified credentials in cloud and Kubernetes.</SectionText>
      <CertGrid>
        {certifications.map((cert) => (
          <CertCard key={cert.name}>
            <CertName>{cert.name}</CertName>
            <CertIssuer>{cert.issuer}</CertIssuer>
            <CertStatus status={cert.status}>{cert.status.replace('-', ' ')}</CertStatus>
            {cert.note && <CertNote>{cert.note}</CertNote>}
            {cert.badgeId && (
              <BadgeWrap dangerouslySetInnerHTML={{ __html: renderBadge(cert.badgeId) }} />
            )}
          </CertCard>
        ))}
      </CertGrid>
    </Section>
  );
};

export default Certifications;
