import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '~/hooks/useMousePosition';
import { cn } from '~/lib/cn';

export function CardBox({
  pos,
  numberOfBoxPerLine,
  totalNumberOfBoxes,
}: {
  pos: number;
  numberOfBoxPerLine: number;
  totalNumberOfBoxes: number;
}) {
  const widthAndHeightOfBox = `${100 / numberOfBoxPerLine}%`;
  const ref = useRef<HTMLDivElement>(null);
  const { cursorX, cursorY } = useMousePosition();
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    function handler() {
      if (!cursorX || !cursorY || !ref.current) return;
      const { x: boxX, y: boxY } = ref.current.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(boxX - cursorX.get(), 2) + Math.pow(boxY - cursorY.get(), 2),
      );

      setOpacity(distance < 225 ? 0.9 : 0.5);
    }

    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      className={cn(
        'border-b border-r border-border bg-card transition-opacity',
        /**
         * If a box's position is a multiple of `numberOfBoxPerLine`, it means that it's the last box of a row,
         * so it shouldn't have right border as the container already has a set border
         */
        (pos + 1) % numberOfBoxPerLine === 0 && 'border-r-0',
        // The boxes in the last row must not have a bottom border as the container already has a set border,
        pos + 1 > totalNumberOfBoxes - numberOfBoxPerLine && 'border-b-0',
      )}
      style={{
        width: widthAndHeightOfBox,
        height: widthAndHeightOfBox,
        opacity: opacity,
      }}
      ref={ref}
    ></div>
  );
}
