import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '~/hooks/useTheme';
import { motion } from 'framer-motion';

export function ThemeSwitch() {
  const { theme, switchTheme } = useTheme();
  return (
    <button
      className="relative z-40 h-[48px] w-[48px] overflow-hidden rounded-full border-[1px] border-muted bg-card transition-all hover:scale-105 sm:h-[56px] sm:w-[56px]"
      onClick={switchTheme}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div animate={{ y: theme === 'system' ? 0 : 40 }}>
          <Laptop height={24} width={24} />
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            x: theme === 'light' ? 0 : -30,
            y: theme === 'light' ? 0 : 40,
          }}
        >
          <Sun height={24} width={24} />
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            x: theme === 'dark' ? 0 : 30,
            y: theme === 'dark' ? 0 : 40,
          }}
        >
          <Moon height={24} width={24} />
        </motion.div>
      </div>
    </button>
  );
}
