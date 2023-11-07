import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';
import fonts from '~/fonts.css';
import { NavigationOverlay } from './components/navigation-overlay';
import { cssBundleHref } from '@remix-run/css-bundle';
import { ThemeContextProvider } from './contexts/theme-provider';
import { MenuContextProvider } from './contexts/menu-provider';
import { MousePositionContextProvider } from './contexts/mouse-position-provider';
import { FullPageMouseEffect } from './components/full-page-mouse-effect';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: fonts },
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background font-sans text-foreground">
        <ThemeContextProvider>
          <MousePositionContextProvider>
            <MenuContextProvider>
              <NavigationOverlay />
              <Outlet />
              <FullPageMouseEffect />
            </MenuContextProvider>
          </MousePositionContextProvider>
        </ThemeContextProvider>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
