import { ThemeContext } from '~/contexts/theme-provider';
import { useContext } from 'react';

export function useTheme() {
  return useContext(ThemeContext);
}
