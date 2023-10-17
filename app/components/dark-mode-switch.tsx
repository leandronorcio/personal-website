import { useTheme } from '~/hooks/useTheme';
import { Switch } from './ui/switch';
import { Moon, Sun } from 'lucide-react';

export function DarkModeSwitch() {
  const { isDarkMode, handleThemeChange } = useTheme();

  return (
    <Switch
      isSelected={isDarkMode}
      onChange={handleThemeChange}
      aria-label="Dark mode switch"
      renderIcon={() =>
        isDarkMode ? (
          <Moon className="h-4 w-4 stroke-primary" />
        ) : (
          <Sun className="h-4 w-5 stroke-primary-foreground" />
        )
      }
    />
  );
}
