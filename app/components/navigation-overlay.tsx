import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Menu } from './menu';
import { useMenu } from '~/hooks/useMenu';
import { useEffect } from 'react';

export function NavigationOverlay() {
  const { isOpen } = useMenu();
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
      <Menu />
    </motion.div>
  );
}

const springConfig = {
  type: 'spring',
  bounce: 0,
  stiffness: 100,
  damping: 30,
};
