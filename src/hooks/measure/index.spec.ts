import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';
import { useMeasure } from '.';

test('should use size', () => {
  let { result } = renderHook(() => {
    let ref = useRef<HTMLDivElement>();
    return useMeasure(ref);
  });

  expect(result.current.height).toBe(0);
  expect(result.current.width).toBe(0);
  expect(result.current.x).toBe(0);
  expect(result.current.y).toBe(0);
  expect(result.current.top).toBe(0);
  expect(result.current.right).toBe(0);
  expect(result.current.left).toBe(0);
  expect(result.current.bottom).toBe(0);
});
