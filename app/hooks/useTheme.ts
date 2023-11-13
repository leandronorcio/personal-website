import { ThemeContext } from '~/contexts/theme-provider';
import { useContext } from 'react';

export function useTheme() {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  const switchTheme = () => {
    if (theme === 'system') return handleThemeChange('light');
    if (theme === 'light') return handleThemeChange('dark');
    if (theme === 'dark') return handleThemeChange('system');
  };

  return { theme, switchTheme };
}
