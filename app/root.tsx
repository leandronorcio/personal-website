import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import '~/tailwind.css';
import '~/fonts.css';
import { NavigationOverlay } from './components/navigation-overlay';
import { ThemeContextProvider } from './contexts/theme-provider';
import { MenuContextProvider } from './contexts/menu-provider';
import { MousePositionContextProvider } from './contexts/mouse-position-provider';
import { FullPageMouseEffect } from './components/full-page-mouse-effect';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

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
              <FullPageMouseEffect />
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <Outlet />
                <Footer />
              </div>
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
