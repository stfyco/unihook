# `useWindowSize`

A hook for measuring the size of elements.

```jsx
import { useWindowSize } from 'unihook';

let Component = () => {
  let { height, width } = useWindowSize();

  console.log('the window is ', height, 'heigh and ', width, 'wide');

  // ...
};
```
