# `useWindowSize`

A hook for getting the viewport size.

```jsx
import { useWindowSize } from 'unihook';

let Component = () => {
  let { height, width } = useWindowSize();

  console.log('the window is ', height, 'heigh and ', width, 'wide');

  // ...
};
```
