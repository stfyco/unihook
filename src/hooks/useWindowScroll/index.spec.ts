import { renderHook } from '@testing-library/react-hooks';
import { useWindowScroll } from '.';

test('should use size', () => {
  let { result } = renderHook(() => {
    return useWindowScroll();
  });

  expect(result.current.x).toBe(0);
  expect(result.current.y).toBe(0);
});
