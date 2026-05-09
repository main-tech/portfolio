import styled from 'styled-components';

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0 56px;
`;

export const ExpCard = styled.article`
  background: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 12px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 18px 20px;
  }
`;

export const ExpHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;

export const ExpRole = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.cardText};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ExpDates = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.cardTextMuted};
  letter-spacing: 0.02em;
`;

export const ExpCompany = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.cardText};
`;

export const ExpLocation = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.cardTextSubtle};
  margin-left: 8px;
`;

export const ExpSummary = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.cardTextMuted};
  margin-top: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ExpLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
  align-items: center;
`;

export const ExpLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.linkAccent};
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.linkAccentBorder};
  transition: 0.2s ease;
  padding-bottom: 1px;

  &:hover {
    color: ${(props) => props.theme.colors.cardText};
    border-bottom-color: ${(props) => props.theme.colors.cardText};
  }
`;

export const ExpLinkPrimary = styled(ExpLink)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  border: none;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);

  &:hover {
    color: #fff;
    opacity: 0.92;
  }
`;
