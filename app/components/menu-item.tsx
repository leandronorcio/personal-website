import { NavLink } from '@remix-run/react';
import { motion, Variants } from 'framer-motion';
import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import { useMenu } from '~/hooks/useMenu';
import { cn } from '~/lib/cn';

export interface MenuItem {
  title: string;
  route: string;
}
// Delay to wait for the navigation overlay's animation to finish
const FADE_IN_DELAY = 0.19;
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: FADE_IN_DELAY,
      duration: 2,
    },
  },
};
const springConfig = { type: 'spring', stiffness: 300, damping: 30, mass: 2 };

export const MenuItem = memo(function MenuItem({
  title,
  route,
  pos,
}: MenuItem & { pos: number }) {
  const { isOpen, toggle } = useMenu();

  return (
    <NavLink to={route} className="block self-start" onClick={toggle}>
      {({ isActive }) => (
        <motion.li
          className="group relative flex cursor-pointer flex-col justify-center self-start"
          variants={itemVariants}
          initial={!isMobile ? 'hidden' : 'shown'}
          animate={!isMobile && 'shown'}
          exit={!isMobile ? 'hidden' : 'shown'}
        >
          <div className="relative flex h-full">
            {title.split('').map((letter, i) => (
              <motion.div
                className={cn(
                  isActive &&
                    'bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent',
                )}
                key={i}
                animate={{ x: isOpen ? 0 : 400 }}
                transition={{
                  // Stagger each menu item then stagger each letter in the menu item
                  delay: (isOpen ? FADE_IN_DELAY : 0) + pos * 0.03 + i * 0.05,
                  ...springConfig,
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          {/* Passing underline hover effect. */}
          {
            <motion.div
              animate={{ x: isOpen ? 0 : 400 }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mt-1 h-1 origin-right scale-x-0 bg-foreground transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></div>
            </motion.div>
          }
        </motion.li>
      )}
    </NavLink>
  );
});
