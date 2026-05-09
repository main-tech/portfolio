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
  background: rgba(71, 74, 87, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardBody = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
