import { cn } from '~/lib/cn';
import { useMenu } from '~/hooks/useMenu';
import { motion } from 'framer-motion';
import { AnimatedCircle } from './animated-circle';

export function HamburgerButton() {
  const { isOpen, toggle } = useMenu();

  return (
    <button
      className={cn(
        'relative z-40 h-[48px] w-[48px] rounded-full sm:h-[56px] sm:w-[56px]',
      )}
      onClick={toggle}
      aria-label="Toggle navigation"
    >
      <AnimatedCircle />
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
  );
}
