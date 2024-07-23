'use client';

import { type MutableRefObject, useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
): MutableRefObject<T> {
  const reference = useRef<T>();

  useEffect(() => {
    const handleClick = (event: any): void => {
      if (reference.current && !reference.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [reference]);

  return reference as MutableRefObject<T>;
}
