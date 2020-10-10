# `useSize`

A hook for measuring the size of elements.

```jsx
import { useScroll } from 'unihook';

let Component = () => {
  let ref = useRef();
  let { x, y } = useScroll(ref);

  return (
    <div ref={ref}>
      {/* ... */}
    </div>
  )
}
```
