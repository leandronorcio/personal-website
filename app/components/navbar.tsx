import memoji from '~/photos/memoji.png';
import { useLocation } from '@remix-run/react';
import { ThemeSwitch } from './ui/theme-switch';
import { HamburgerButton } from './ui/hamburger-button';

export function Navbar() {
  const { pathname } = useLocation();

  const headers: Record<string, string> = {
    '/': 'Home',
    '/projects': 'Projects',
    '/about': 'About Me',
    '/contact': 'Contact Me',
  };

  return (
    <div className="fixed top-0 z-30 flex w-full justify-center border-b border-border bg-card/30 p-3 backdrop-blur sm:p-4">
      <div className="flex w-full max-w-2xl items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={memoji}
            alt="My memoji"
            className="h-[48px] w-[48px] rounded-full sm:h-[56px] sm:w-[56px]"
          />
          <h1 className="text-2xl font-bold sm:text-3xl">
            {headers[pathname]}
          </h1>
        </div>
        <div className="flex gap-3">
          <ThemeSwitch />
          <HamburgerButton />
        </div>
      </div>
    </div>
  );
}
