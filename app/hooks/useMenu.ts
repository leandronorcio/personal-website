import { useContext } from 'react';
import { MenuContext } from '~/contexts/menu-provider';

export function useMenu() {
  return useContext(MenuContext);
}
