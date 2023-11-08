import { cn } from '~/lib/cn';
import memoji from '~/photos/memoji.png';
import { useLocation } from '@remix-run/react';
import { useMenu } from '~/hooks/useMenu';

export function Navbar() {
  const { isOpen, toggle } = useMenu();
  const { pathname } = useLocation();

  const headers: Record<string, string> = {
    '/': 'Home',
    '/projects': 'Projects',
    '/about': 'About Me',
    '/contact': 'Contact Me',
  };

  return (
    <div className="fixed top-0 z-30 flex w-full items-center justify-between  border-b border-border bg-card/30 p-3 backdrop-blur sm:p-4">
      <div className="flex items-center gap-3">
        <img
          src={memoji}
          alt="My memoji"
          className="h-[48px] w-[48px] rounded-full sm:h-[56px] sm:w-[56px]"
        />
        <h1 className="text-3xl font-bold">{headers[pathname]}</h1>
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
  );
}
