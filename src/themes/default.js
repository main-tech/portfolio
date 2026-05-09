const breakpoints = {
  sm: 'screen and (max-width: 640px)',
  md: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1024px)',
  xl: 'screen and (max-width: 1280px)',
};

const fonts = {
  title: 'Space Grotesk, sans-serif',
  main: 'Space Grotesk, sans-serif',
};

export const dark = {
  name: 'dark',
  fonts,
  breakpoints,
  colors: {
    primary1: 'hsl(204,23.8%,95.9%)',
    background1: '#0F1624',
    accent1: 'hsl(34.9,98.6%,72.9%)',
    button: 'hsl(205.1,100%,36.1%)',
    background2: 'hsl(232.7,27.3%,23.7%)',

    bodyBg: '#0F1624',
    bodyText: 'hsl(204,23.8%,95.9%)',
    headerBg: 'rgba(15, 22, 36, 0.72)',
    headerBorder: 'rgba(255, 255, 255, 0.08)',
    navText: 'rgba(255, 255, 255, 0.75)',
    navHover: '#ffffff',
    iconHoverBg: '#212d45',

    textMuted: 'rgba(255, 255, 255, 0.75)',
    textSubtle: 'rgba(255, 255, 255, 0.5)',
    titleGradient:
      'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',
    titleGradientTight:
      'linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%)',
    linkAccent: '#9cc9e3',
    linkAccentBorder: 'rgba(156, 201, 227, 0.3)',
    cardBg: '#474a57',
    cardBgSoft: 'rgba(71, 74, 87, 0.55)',
    cardBorder: 'rgba(255, 255, 255, 0.06)',
    cardText: '#ffffff',
    cardTextMuted: 'rgba(255, 255, 255, 0.75)',
    cardTextSubtle: 'rgba(255, 255, 255, 0.5)',
    timelineBg: '#0F1624',
    timelineItemBg: '#0E131F',
    pillBg: 'rgba(255, 255, 255, 0.06)',
    pillBorder: 'rgba(255, 255, 255, 0.12)',
    pillText: 'rgba(255, 255, 255, 0.85)',
    divider: 'rgba(255, 255, 255, 0.1)',
  },
};

export const light = {
  name: 'light',
  fonts,
  breakpoints,
  colors: {
    primary1: '#0F1624',
    background1: '#f5f7fb',
    accent1: 'hsl(20.5, 90.2%, 48.2%)',
    button: 'hsl(205.1,100%,36.1%)',
    background2: 'hsl(220, 16%, 88%)',

    bodyBg: '#f5f7fb',
    bodyText: '#0F1624',
    headerBg: 'rgba(245, 247, 251, 0.78)',
    headerBorder: 'rgba(15, 22, 36, 0.08)',
    navText: 'rgba(15, 22, 36, 0.72)',
    navHover: '#0F1624',
    iconHoverBg: 'rgba(15, 22, 36, 0.08)',

    textMuted: 'rgba(15, 22, 36, 0.78)',
    textSubtle: 'rgba(15, 22, 36, 0.6)',
    titleGradient:
      'linear-gradient(121.57deg, #0F1624 18.77%, rgba(15, 22, 36, 0.66) 60.15%)',
    titleGradientTight:
      'linear-gradient(121.57deg, #0F1624 10%, rgba(15, 22, 36, 0.66) 30.15%)',
    linkAccent: '#1f6feb',
    linkAccentBorder: 'rgba(31, 111, 235, 0.3)',
    cardBg: '#e6ebf3',
    cardBgSoft: '#ecf0f6',
    cardBorder: 'rgba(15, 22, 36, 0.1)',
    cardText: '#0F1624',
    cardTextMuted: 'rgba(15, 22, 36, 0.78)',
    cardTextSubtle: 'rgba(15, 22, 36, 0.58)',
    timelineBg: '#f5f7fb',
    timelineItemBg: '#e6ebf3',
    pillBg: 'rgba(15, 22, 36, 0.05)',
    pillBorder: 'rgba(15, 22, 36, 0.12)',
    pillText: 'rgba(15, 22, 36, 0.85)',
    divider: 'rgba(15, 22, 36, 0.1)',
  },
};

export default dark;
