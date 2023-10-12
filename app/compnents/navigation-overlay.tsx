import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { cn } from '~/lib/cn';

export function NavigationOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  // 0 when closed, 1 when opened
  const motionValue = useMotionValue(0);
  const inputRange = [0, 1];

  const ellipseX = useTransform(motionValue, inputRange, [0, 100]);

  // Start at the top right then end up at the center
  const clipPathX = useTransform(motionValue, inputRange, [110, 50]);
  const clipPathY = useTransform(motionValue, inputRange, [0, 50]);

  const toggle = () => {
    setIsOpen((prev) => {
      const newValue = !prev;
      if (newValue) {
        motionValue.set(1);
      } else {
        motionValue.set(0);
      }
      return newValue;
    });
  };

  return (
    <>
      <button
        className={cn(
          'fixed top-6 right-8 sm:right-10 z-20  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full transition-all active:scale-90',
          !isOpen
            ? 'bg-primary hover:bg-primary-accent'
            : 'border-2 border-primary'
        )}
        onClick={toggle}
        aria-label="Toggle navigation"
      >
        <div
          className={cn(
            'h-1 w-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 transition-all',
            isOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[150%]',
            !isOpen ? 'bg-primary-foreground' : 'bg-destructive'
          )}
        ></div>
        <div
          className={cn(
            'bg-primary-foreground h-1 w-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 transition-all',
            isOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[100%]',
            !isOpen ? 'bg-primary-foreground' : 'bg-destructive'
          )}
        ></div>
      </button>
      <motion.div
        className="w-full h-full fixed bg-primary-accent"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${clipPathX.get()}% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full fixed bg-red-300"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 1
          }% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full fixed bg-blue-300"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 2
          }% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full fixed bg-card"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 3
          }% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
    </>
  );
}

const springConfig = {
  type: 'spring',
  bounce: 0,
  stiffness: 100,
  damping: 30,
};
