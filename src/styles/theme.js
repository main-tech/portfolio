import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../themes/default';
import GlobalStyles from './globals';

const STORAGE_KEY = 'portfolio-theme';
const VALID_MODES = ['light', 'dark', 'auto'];

export const ThemeModeContext = createContext({
  mode: 'auto',
  resolvedMode: 'dark',
  setMode: () => {},
  cycleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

const getSystemMode = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const Theme = ({ children }) => {
  const [mode, setModeState] = useState('auto');
  const [systemMode, setSystemMode] = useState('dark');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && VALID_MODES.includes(stored)) {
        setModeState(stored);
      }
    } catch {
      // ignore storage errors (private mode, etc.)
    }
    setSystemMode(getSystemMode());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e) => setSystemMode(e.matches ? 'light' : 'dark');
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const setMode = useCallback((next) => {
    if (!VALID_MODES.includes(next)) return;
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const cycleMode = useCallback(() => {
    setModeState((current) => {
      const order = ['auto', 'light', 'dark'];
      const next = order[(order.indexOf(current) + 1) % order.length];
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const resolvedMode = mode === 'auto' ? systemMode : mode;
  const activeTheme = resolvedMode === 'light' ? light : dark;

  const ctx = useMemo(
    () => ({ mode, resolvedMode, setMode, cycleMode }),
    [mode, resolvedMode, setMode, cycleMode],
  );

  return (
    <ThemeModeContext.Provider value={ctx}>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyles />
        <div data-theme={resolvedMode} suppressHydrationWarning data-hydrated={hydrated}>
          {children}
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default Theme;
