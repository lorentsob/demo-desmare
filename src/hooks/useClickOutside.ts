import { RefObject, useEffect } from 'react';

/**
 * Hook to detect clicks outside of a specified element and trigger a callback
 * @param ref - React ref object for the element to monitor
 * @param callback - Function to call when a click outside occurs
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
