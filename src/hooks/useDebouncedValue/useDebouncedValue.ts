import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash/debounce';

export const useDebouncedValue = <T>(value: T, delay = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const debouncedSetter = useMemo(
    () => debounce(setDebouncedValue, delay),
    [delay],
  );

  useEffect(() => {
    debouncedSetter(value);
    return () => debouncedSetter.cancel();
  }, [value, debouncedSetter]);

  return debouncedValue;
};
