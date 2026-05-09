import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bodyBg};
    color: ${(props) => props.theme.colors.bodyText};
    cursor: default;
    transition: background-color 0.25s ease, color 0.25s ease;
  }
  main {
    padding-top: 80px;

    @media ${(props) => props.theme.breakpoints.md} {
      padding-top: 72px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      padding-top: 64px;
    }
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
