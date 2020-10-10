import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from '.';

test('should use size', () => {
  let { result } = renderHook(() => {
    return useWindowSize();
  });

  expect(result.current.height).toBe(window.innerHeight || Infinity);
  expect(result.current.width).toBe(window.innerWidth || Infinity);
});
