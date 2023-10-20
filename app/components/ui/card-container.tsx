import { cn } from '~/lib/cn';
import { CardBox } from './card-box';

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  // The number of box per row/column
  numberOfBoxPerLine?: number;
}

// A card container with grid lines (like rulers) as its background
export function CardContainer({
  children,
  numberOfBoxPerLine = 3,
  ...rest
}: CardContainerProps) {
  const totalNumberOfBoxes = Math.pow(numberOfBoxPerLine, 2);

  return (
    <div
      {...rest}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border p-4 shadow-2xl shadow-background sm:p-8',
        rest.className,
      )}
    >
      <div className="absolute left-0 right-0 top-0 z-[-1] flex h-full w-full flex-wrap">
        {Array.from({ length: totalNumberOfBoxes }).map((_, i) => (
          <CardBox
            key={i}
            pos={i}
            totalNumberOfBoxes={totalNumberOfBoxes}
            numberOfBoxPerLine={numberOfBoxPerLine}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
