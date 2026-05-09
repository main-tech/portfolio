import styled from 'styled-components';

export const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 56px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const CertCard = styled.div`
  background: #474a57;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const CertName = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CertIssuer = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.65);
`;

export const CertStatus = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  width: fit-content;
  background: ${(props) =>
    props.status === 'completed'
      ? 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'
      : props.status === 'in-progress'
        ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
        : 'rgba(255, 255, 255, 0.12)'};
  color: #ffffff;
  text-transform: capitalize;
`;

export const CertNote = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;

export const BadgeWrap = styled.div`
  margin-top: 12px;
`;
