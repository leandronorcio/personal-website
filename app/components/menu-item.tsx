import { NavLink } from '@remix-run/react';
import { motion, Variants } from 'framer-motion';
import { useMenu } from '~/hooks/useMenu';
import { cn } from '~/lib/cn';

export interface MenuItem {
  title: string;
  route: string;
  isHovered: boolean;
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

export function MenuItem({
  title,
  route,
  isHovered,
  setItems,
  pos,
}: MenuItem & {
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  pos: number;
}) {
  const { toggle } = useMenu();
  return (
    <NavLink to={route} className="block self-start" onClick={toggle}>
      {({ isActive }) => (
        <motion.li
          className="group relative flex cursor-pointer flex-col justify-center self-start"
          variants={itemVariants}
          initial="hidden"
          animate="shown"
          exit="hidden"
          onMouseEnter={() =>
            setItems((prev) =>
              prev.map((item) => ({
                ...item,
                isHovered: item.title === title,
              })),
            )
          }
        >
          <div className="relative flex h-full">
            {title.split('').map((letter, i) => (
              <motion.div
                className={cn(
                  isActive &&
                    'bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent',
                )}
                key={i}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{
                  // Stagger each menu item then stagger each letter in the menu item
                  delay: FADE_IN_DELAY + pos * 0.05 + i * 0.05,
                  ...springConfig,
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>
          {/* Show the background highlighter when hovered or when the current route is active and not a single menu item is currently being hovered. */}
          {isHovered && (
            <motion.div
              layoutId="menu-items-hover-bg"
              className="absolute z-[-1] h-full w-full bg-primary"
            ></motion.div>
          )}

          {/* Passing underline hover effect. */}
          <motion.div className="mt-1 h-1 origin-right scale-x-0 bg-accent-foreground transition-transform group-hover:origin-left group-hover:scale-x-100"></motion.div>
        </motion.li>
      )}
    </NavLink>
  );
}
