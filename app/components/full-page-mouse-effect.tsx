import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '~/hooks/useMousePosition';

const size = 500;
export function FullPageMouseEffect() {
  const { cursorX, cursorY } = useMousePosition();
  const springConfig = { damping: 40, stiffness: 100 };

  const cursorXSpring = useSpring(cursorX!, springConfig);
  const cursorYSpring = useSpring(cursorY!, springConfig);

  return (
    <motion.div
      // Translate by -50% so that it is positioned at the center of the mouse position, not its top-left
      className="fixed z-[-1] -translate-x-1/2 -translate-y-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: cursorYSpring,
        left: cursorXSpring,
        filter: 'blur(170px)',
      }}
    >
      <div className="h-full w-full animate-rotate-and-scale rounded-full bg-gradient-to-r from-pink-800 to-blue-800 opacity-70"></div>
    </motion.div>
  );
}
