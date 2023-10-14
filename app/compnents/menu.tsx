import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMenu } from '~/hooks/useMenu';
import { MenuItem } from './menu-item';

export function Menu() {
  const [items, setItems] = useState<MenuItem[]>([
    {
      title: 'home',
      route: '/',
      isHovered: false,
    },
    {
      title: 'projects',
      route: '/projects',
      isHovered: false,
    },
    {
      title: 'about',
      route: '/about',
      isHovered: true,
    },
    {
      title: 'contact',
      route: '/contact',
      isHovered: false,
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
      <AnimatePresence>
        {isOpen
          ? items.map(({ title, isHovered, route }, i) => (
              <MenuItem
                title={title}
                route={route}
                isHovered={isHovered}
                key={title}
                setItems={setItems}
                pos={i}
              />
            ))
          : null}
      </AnimatePresence>
    </ul>
  );
}
