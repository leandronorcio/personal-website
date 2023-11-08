import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '~/lib/cn';
import { DarkModeSwitch } from './dark-mode-switch';
import { Menu } from './menu';
import { useMenu } from '~/hooks/useMenu';
import { useEffect } from 'react';
import memoji from '~/photos/memoji.png';

export function NavigationOverlay() {
  const { isOpen, toggle } = useMenu();
  // 0 when closed, 1 when opened
  const motionValue = useMotionValue(isOpen ? 1 : 0);
  const inputRange = [0, 1];

  const ellipseX = useTransform(motionValue, inputRange, [0, 100]);

  // Start at the top right then end up at the center
  const clipPathX = useTransform(motionValue, inputRange, [110, 50]);
  const clipPathY = useTransform(motionValue, inputRange, [0, 50]);

  useEffect(() => {
    motionValue.set(!isOpen ? 1 : 0);
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 z-30 flex w-full items-center justify-between  border-b border-border bg-card/30 p-3 backdrop-blur sm:p-4">
        <div className="h-[48px] w-[48px] rounded-full sm:h-[56px] sm:w-[56px]">
          <img src={memoji} alt="My memoji" className="h-full w-full" />
        </div>
        <button
          className={cn(
            'relative z-40 h-[48px] w-[48px] rounded-full border-2 border-muted transition-all hover:scale-105 sm:h-[56px] sm:w-[56px]',
            !isOpen ? 'border-[1px] bg-card' : 'border-muted',
          )}
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <div
            className={cn(
              'absolute left-1/2 top-1/2 h-[3px] w-6 -translate-x-1/2 transition-all',
              isOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[250%]',
              !isOpen ? 'bg-foreground' : 'bg-destructive',
            )}
          ></div>
          <div
            className={cn(
              'absolute left-1/2 top-1/2 h-[3px] w-6 -translate-x-1/2 transition-all',
              isOpen && '-translate-y-1/2 rotate-45',
              !isOpen ? 'bg-foreground' : 'bg-destructive',
            )}
          ></div>
          <div
            className={cn(
              'absolute left-1/2 top-1/2 h-[3px] w-6 -translate-x-1/2 transition-all',
              isOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[250%]',
              !isOpen ? 'bg-foreground' : 'bg-destructive',
            )}
          ></div>
        </button>
      </div>
      {/* <motion.div
        className="fixed left-0 top-0 z-20 h-screen w-screen bg-primary-accent"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${clipPathX.get()}% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
      <motion.div
        className="fixed left-0 top-0 z-20 h-screen w-screen bg-red-300"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 1
          }% ${clipPathY.get()}%)`,
        }}
      ></motion.div>
      <motion.div
        className="fixed left-0 top-0 z-20 h-screen w-screen bg-blue-300"
        transition={springConfig}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 2
          }% ${clipPathY.get()}%)`,
        }}
      ></motion.div> */}
      <motion.div
        className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-card"
        transition={springConfig}
        style={{
          clipPath: `ellipse(0% 110% at 113% 0%)`,
        }}
        animate={{
          clipPath: `ellipse(${ellipseX.get()}% 110% at ${
            clipPathX.get() + 3
          }% ${clipPathY.get()}%)`,
        }}
      >
        <div className="fixed right-3 top-24 sm:right-4 sm:top-28">
          <DarkModeSwitch />
        </div>
        <Menu />
      </motion.div>
    </>
  );
}

const springConfig = {
  type: 'spring',
  bounce: 0,
  stiffness: 100,
  damping: 30,
};
