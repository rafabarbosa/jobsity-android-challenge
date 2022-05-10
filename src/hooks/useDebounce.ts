import { useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef<any>();

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
