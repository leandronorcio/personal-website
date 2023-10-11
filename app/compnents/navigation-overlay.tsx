import { useState } from 'react';
import { cn } from '~/lib/cn';

export function NavigationOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

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
      {isOpen && <div className="fixed h-screen w-screen z-10 bg-card"></div>}
    </>
  );
}
