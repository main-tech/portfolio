import styled from 'styled-components';

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0 56px;
`;

export const ExpCard = styled.article`
  background: #474a57;
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
  color: #ffffff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ExpDates = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.02em;
`;

export const ExpCompany = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
`;

export const ExpLocation = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  margin-left: 8px;
`;

export const ExpSummary = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
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
  color: #9cc9e3;
  text-decoration: none;
  border-bottom: 1px solid rgba(156, 201, 227, 0.3);
  transition: 0.2s ease;
  padding-bottom: 1px;

  &:hover {
    color: #fff;
    border-bottom-color: #fff;
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
