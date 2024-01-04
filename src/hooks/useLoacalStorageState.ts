import { useState, useEffect } from 'react';
import { StateType } from '../context/NoteContext';

type UseLocalStorageState = {
  initialState: StateType;
  key: string;
};

export const useLocalStorageState = ({
  initialState,
  key,
}: UseLocalStorageState) => {
  const [value, setValue] = useState<StateType>(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue] as const;
};
