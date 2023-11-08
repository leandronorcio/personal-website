import { MotionValue, useMotionValue } from 'framer-motion';
import { createContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

// Store the motion values of the mouse position in this context
export const MousePositionContext = createContext<{
  cursorX: MotionValue<number> | null;
  cursorY: MotionValue<number> | null;
}>({
  cursorX: null,
  cursorY: null,
});

export function MousePositionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    if (isMobile) return;

    // Calling `MotionValue.set()` does not trigger a re-render
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={{ cursorX, cursorY }}>
      {children}
    </MousePositionContext.Provider>
  );
}
