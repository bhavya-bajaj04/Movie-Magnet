import { useState, useEffect } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const setValue = localStorage.getItem("watched");
    return setValue ? JSON.parse(setValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue];
}
