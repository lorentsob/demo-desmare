import { useEffect } from 'react';

/**
 * Hook to lock body scroll when a modal or sidebar is open
 * @param isLocked - Boolean indicating whether the body scroll should be locked
 */
export function useBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
}
