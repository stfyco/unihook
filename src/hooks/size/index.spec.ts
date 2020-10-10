import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';
import { useSize } from '.';

test('should use size', () => {
  let { result } = renderHook(() => {
    let ref = useRef<HTMLDivElement>();
    return useSize(ref);
  });

  expect(result.current.height).toBe(0);
  expect(result.current.width).toBe(0);
});
