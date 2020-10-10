import { useEffect, useState } from 'react';
import { isServer } from '../../utils/isServer';

export let useWindowScroll = () => {
  let [scroll, setScroll] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (isServer) return undefined;

    let handler = () => {
      setScroll({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true
    });

    return () => document.removeEventListener('scroll', handler);
  }, []);

  return scroll;
};
