import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';
import { useScroll } from '.';

test('should use size', () => {
  let { result } = renderHook(() => {
    let ref = useRef<HTMLDivElement>();
    return useScroll(ref);
  });

  expect(result.current.x).toBe(0);
  expect(result.current.y).toBe(0);
});
