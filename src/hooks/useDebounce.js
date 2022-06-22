import { useState, useEffect } from "react";
/**
 * custom hook to get debounced value
 * @params
 * value: value to be debounced
 * delay: delay in ms
 * @returns debounced value
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
