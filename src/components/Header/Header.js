import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSettingsBrightness } from 'react-icons/md';

import { useThemeMode } from '../../styles/theme';
import {
  Actions,
  Brand,
  Container,
  Inner,
  MenuButton,
  MobileNavList,
  MobileNavWrapper,
  NavLink,
  NavList,
  SocialIcons,
  Span,
  ThemeButton,
} from './HeaderStyles';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

const ThemeIcon = ({ mode }) => {
  if (mode === 'light') return <MdOutlineLightMode size="2rem" />;
  if (mode === 'dark') return <MdOutlineDarkMode size="2rem" />;
  return <MdOutlineSettingsBrightness size="2rem" />;
};

const Header = () => {
  const { mode, cycleMode } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  const themeLabel = mode === 'auto' ? 'Theme: system' : `Theme: ${mode}`;

  return (
    <Container>
      <Inner>
        <Brand>
          <Link href="/" onClick={closeMenu}>
            <DiCssdeck size="3rem" />
            <Span>Mandela Muithi</Span>
          </Link>
        </Brand>

        <NavList>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavList>

        <Actions>
          <SocialIcons
            href="https://www.github.com/main-tech"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="2.4rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/mandela-mitau"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="2.4rem" />
          </SocialIcons>
          <ThemeButton
            type="button"
            onClick={cycleMode}
            aria-label={`${themeLabel}. Click to change theme.`}
            title={themeLabel}
          >
            <ThemeIcon mode={mode} />
          </ThemeButton>
          <MenuButton
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-mobile-nav"
          >
            {menuOpen ? <HiOutlineX size="2.4rem" /> : <HiOutlineMenu size="2.4rem" />}
          </MenuButton>
        </Actions>
      </Inner>

      <MobileNavWrapper open={menuOpen} id="primary-mobile-nav">
        <MobileNavList>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </MobileNavList>
      </MobileNavWrapper>
    </Container>
  );
};

export default Header;
