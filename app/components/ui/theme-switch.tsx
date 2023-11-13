import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '~/hooks/useTheme';
import { motion } from 'framer-motion';
import { AnimatedCircle } from './animated-circle';

export function ThemeSwitch() {
  const { theme, switchTheme } = useTheme();
  return (
    <button
      className="relative z-40 h-[48px] w-[48px] overflow-hidden rounded-full sm:h-[56px] sm:w-[56px]"
      onClick={switchTheme}
    >
      <AnimatedCircle />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ opacity: 0 }}
          animate={{
            y: theme === 'system' ? 0 : 40,
            opacity: theme === 'system' ? 1 : 0,
          }}
        >
          <Laptop height={24} width={24} />
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ opacity: 0 }}
          animate={{
            x: theme === 'light' ? 0 : -30,
            y: theme === 'light' ? 0 : 40,
            opacity: theme === 'light' ? 1 : 0,
          }}
        >
          <Sun height={24} width={24} />
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ opacity: 0 }}
          animate={{
            x: theme === 'dark' ? 0 : 30,
            y: theme === 'dark' ? 0 : 40,
            opacity: theme === 'dark' ? 1 : 0,
          }}
        >
          <Moon height={24} width={24} />
        </motion.div>
      </div>
    </button>
  );
}
