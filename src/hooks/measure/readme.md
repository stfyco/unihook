# `useMeasure`

A hook for measuring the size of elements.

```jsx
import { useMeasure } from 'unihook';

let Component = () => {
  let ref = useRef();
  let { height, width, x, y, top, right, left, bottom } = useMeasure(ref);

  return (
    <div ref={ref}>
      {/* ... */}
    </div>
  )
}
```
