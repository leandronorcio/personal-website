import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMenu } from '~/hooks/useMenu';
import { MenuItem } from './menu-item';

export function Menu() {
  const [items, setItems] = useState<MenuItem[]>([
    {
      title: 'home',
      route: '/',
    },
    {
      title: 'projects',
      route: '/projects',
    },
    {
      title: 'about',
      route: '/about',
    },
    {
      title: 'contact',
      route: '/contact',
    },
  ]);

  const { isOpen } = useMenu();

  useEffect(() => {
    // Reset `isHovered` state to false when opening the overlay
    if (isOpen)
      setItems((prev) => prev.map((item) => ({ ...item, isHovered: false })));
  }, [isOpen]);

  return (
    <ul className="flex flex-col gap-3 font-serif text-6xl text-foreground ">
      {items.map(({ title, route }, i) => (
        <MenuItem title={title} route={route} pos={i} key={title} />
      ))}
    </ul>
  );
}
