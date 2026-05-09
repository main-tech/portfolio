import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 56px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 16px 0 32px;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBgSoft};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 12px;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.cardText};
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardBody = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.cardTextMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
