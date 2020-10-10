# `useSize`

A hook for measuring the size of elements.

```jsx
import { useSize } from 'unihook';

let Component = () => {
  let ref = useRef();
  let { height, width } = useSize(ref);

  return (
    <div ref={ref}>
      {/* ... */}
    </div>
  )
}
```
