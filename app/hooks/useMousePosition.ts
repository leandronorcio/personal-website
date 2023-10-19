import { useContext } from 'react';
import { MousePositionContext } from '~/contexts/mouse-position-provider';

export function useMousePosition() {
  return useContext(MousePositionContext);
}
