import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useDebounce = (name, value, delay, func) => {
  const dispatch = useDispatch();
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      func({ target: { name: name, value: value } });
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
