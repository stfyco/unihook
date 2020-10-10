# `useWindowScroll`

A hook for accessing the x and y scrolling values.

```jsx
import { useWindowScroll } from 'unihook';

let Component = () => {
  let { x, y } = useWindowScroll();

  console.log(x, y);

  // ...
};
```
