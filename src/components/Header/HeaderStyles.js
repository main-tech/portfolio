import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.headerBg};
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  transition: background-color 0.25s ease, border-color 0.25s ease;
`;

export const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.4rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.bodyText};
    transition: color 0.25s ease;
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 0.6rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin: 0;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.navText};
  transition: color 0.25s ease;

  &:hover {
    color: ${(props) => props.theme.colors.navHover};
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.bodyText};
  border-radius: 50px;
  padding: 8px;
  display: inline-flex;

  &:hover {
    background-color: ${(props) => props.theme.colors.iconHoverBg};
    transform: scale(1.1);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 6px;
  }
`;

const iconButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.bodyText};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.iconHoverBg};
    border-color: ${(props) => props.theme.colors.headerBorder};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.navHover};
    outline-offset: 2px;
  }
`;

export const ThemeButton = styled.button`
  ${iconButton}
`;

export const MenuButton = styled.button`
  ${iconButton}
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-flex;
  }
`;

export const MobileNavWrapper = styled.div`
  display: none;
  overflow: hidden;
  max-height: ${({ open }) => (open ? '320px' : '0')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.25s ease;
  border-top: ${({ open, theme }) => (open ? `1px solid ${theme.colors.headerBorder}` : '0')};

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 2rem 1.6rem;
  margin: 0;
  gap: 0.4rem;

  li {
    width: 100%;
  }

  a {
    display: block;
    padding: 1rem 0.4rem;
    font-size: 1.7rem;
    color: ${(props) => props.theme.colors.navText};
    border-radius: 8px;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.navHover};
    background-color: ${(props) => props.theme.colors.iconHoverBg};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.6rem 1.4rem 1.2rem;
  }
`;
