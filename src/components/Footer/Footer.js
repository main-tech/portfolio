import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import sli from '../../generated/sli.json';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SliDeploy,
  SliPill,
  SliStrip,
  SocialContainer,
  SocialIconsContainer,
  StatusDot,
} from './FooterStyles';

const STATUS_LABEL = {
  up: 'Operational',
  degraded: 'Degraded',
  maintenance: 'Maintenance',
  down: 'Outage',
  paused: 'Paused',
  unknown: 'Status pending',
};

const formatRelative = (iso) => {
  if (!iso) return null;
  const diff = Date.now() - new Date(iso).getTime();
  if (Number.isNaN(diff) || diff < 0) return null;
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
};

const Footer = () => {
  const [deployedAgo, setDeployedAgo] = useState(null);

  useEffect(() => {
    if (!sli.builtAt) return undefined;
    setDeployedAgo(formatRelative(sli.builtAt));
    const id = setInterval(() => setDeployedAgo(formatRelative(sli.builtAt)), 60_000);
    return () => clearInterval(id);
  }, []);

  const statusLabel = STATUS_LABEL[sli.status] || STATUS_LABEL.unknown;
  const hasDeploy = sli.commitSha || sli.branch || sli.builtAt;

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+254790770959">+254790770959</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mandela@mandela.dev">mandela@mandela.dev</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Engineering the Future, One Byte at a Time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.github.com/main-tech">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mandela-mitau">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

      <SliStrip aria-label="Site reliability indicators">
        <SliPill>
          <StatusDot status={sli.status} aria-hidden="true" />
          {statusLabel}
        </SliPill>
        {sli.uptime30d != null && (
          <SliPill title="Rolling 30-day availability">
            {Number(sli.uptime30d).toFixed(2)}% / 30d
          </SliPill>
        )}
        {sli.latencyMs != null && (
          <SliPill title="Latest response time">{sli.latencyMs}ms</SliPill>
        )}
        {hasDeploy && (
          <SliDeploy>
            Deployed{' '}
            {sli.branch && <>{sli.branch}</>}
            {sli.commitSha && (
              <>
                {sli.branch ? '@' : ''}
                <code>{sli.commitSha.slice(0, 7)}</code>
              </>
            )}
            {deployedAgo && <> &middot; {deployedAgo}</>}
          </SliDeploy>
        )}
      </SliStrip>
    </FooterWrapper>
  );
};

export default Footer;
