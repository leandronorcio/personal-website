import { createContext, useState } from 'react';

interface MenuContext {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuContext = createContext<MenuContext>({
  isOpen: false,
  toggle: () => {},
});

export function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  );
}
