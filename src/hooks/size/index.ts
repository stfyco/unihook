import React, { useCallback, useLayoutEffect, useState } from 'react';

let getElementSize = (el: HTMLElement | undefined | null) => {
  if (!el) {
    return {
      width: 0,
      height: 0
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  };
};

export let useSize = (
  ref:
    | React.RefObject<HTMLElement | undefined>
    | React.MutableRefObject<HTMLElement | undefined>
) => {
  let [size, setSize] = useState(() => getElementSize(ref.current));

  let onResize = useCallback(() => {
    if (ref.current) setSize(getElementSize(ref.current));
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) return;

    onResize();

    if (typeof ResizeObserver === 'function') {
      let resizeObserver: ResizeObserver | undefined = new ResizeObserver(() => onResize());
      resizeObserver.observe(ref.current);

      return () => {
        if (!resizeObserver) return;

        resizeObserver.disconnect();
        resizeObserver = undefined;
      };
    } else {
      window.addEventListener('resize', onResize);

      return function () {
        window.removeEventListener('resize', onResize);
      };
    }
  }, [ref.current]);

  return size;
};
