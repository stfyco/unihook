import React, { useLayoutEffect, useMemo, useState } from 'react';

let defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

export let useMeasure = (
  ref:
    | React.RefObject<HTMLElement | undefined>
    | React.MutableRefObject<HTMLElement | undefined>
) => {
  let [rect, setRect] = useState(defaultState);

  let observer = useMemo(() => {
    if (typeof ResizeObserver != 'function') return;

    return new ResizeObserver(entries => {
      if (!entries[0]) return;

      let { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
      setRect({ x, y, width, height, top, left, bottom, right });
    });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current || !observer) return;
    observer.observe(ref.current);

    return () => {
      if (!observer) return;
      observer.disconnect();
    };
  }, [ref.current]);

  return rect;
};
