import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 32px 64px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 96px 16px 48px;
  }
`;

export const Eyebrow = styled.div`
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 1.15;
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
  }
`;

export const Meta = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 16px;
  margin-bottom: 32px;
`;

export const SectionH2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  color: #fff;
  margin: 40px 0 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
    margin: 32px 0 8px;
  }
`;

export const Body = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const Bullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 16px;
`;

export const Bullet = styled.li`
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 24px;
  position: relative;
  margin-bottom: 8px;

  &:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 24px;
`;

export const Pill = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 6px 12px;
  border-radius: 999px;
`;

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0 8px;
`;

export const ExternalLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #9cc9e3;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(156, 201, 227, 0.35);
  transition: 0.2s ease;

  &:hover {
    color: #fff;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    color: #fff;
  }
`;
