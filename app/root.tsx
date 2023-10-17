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

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: fonts },
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background font-sans text-foreground">
        <ThemeContextProvider>
          <MenuContextProvider>
            <NavigationOverlay />
            <Outlet />
          </MenuContextProvider>
        </ThemeContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
