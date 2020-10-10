import React, { useEffect, useState } from 'react';

export let useScroll = (
  ref:
    | React.RefObject<HTMLElement | undefined>
    | React.MutableRefObject<HTMLElement | undefined>
) => {
  let [scroll, setScroll] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (!ref.current) return;

    let scrollHandler = () => {
      if (!ref.current) return;

      setScroll({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop
      });
    };

    ref.current.addEventListener('scroll', scrollHandler, {
      capture: false,
      passive: true
    });

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener('scroll', scrollHandler);
    };
  }, [ref]);

  return scroll;
};
