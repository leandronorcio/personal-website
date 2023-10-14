import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useMenu } from '~/hooks/useMenu';

const items = [
  {
    title: 'home',
  },
  {
    title: 'skills',
  },
  {
    title: 'projects',
  },
  {
    title: 'about',
  },
  {
    title: 'contact',
  },
];

export function Menu() {
  const { isOpen } = useMenu();

  return (
    <ul className="font-serif text-foreground text-6xl flex flex-col gap-3 ">
      <AnimatePresence>
        {isOpen
          ? items.map(({ title }, i) => (
              <MenuItem key={title} title={title} pos={i} />
            ))
          : null}
      </AnimatePresence>
    </ul>
  );
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

function MenuItem({ title, pos }: { title: string; pos: number }) {
  return (
    <motion.li
      className="cursor-pointer flex"
      variants={itemVariants}
      initial="hidden"
      animate="shown"
      exit="hidden"
    >
      {title.split('').map((letter, i) => (
        <motion.div
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
    </motion.li>
  );
}
