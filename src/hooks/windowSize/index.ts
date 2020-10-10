import { useEffect, useState } from 'react';
import { isServer } from '../../utils/isServer';

export let useWindowSize = () => {
  const [size, setSize] = useState(() => ({
    width: isServer ? Infinity : window.innerWidth,
    height: isServer ? Infinity : window.innerHeight
  }));

  useEffect((): (() => void) | void => {
    if (isServer) return undefined;

    let handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
};
