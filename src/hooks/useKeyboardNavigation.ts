import { RefObject, useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

/**
 * Hook to handle keyboard navigation within dropdown menus for accessibility
 * @param isOpen - Boolean indicating if the dropdown is open
 * @param containerRef - React ref object for the dropdown container
 * @param onClose - Function to close the dropdown
 * @param focusableSelector - CSS selector for focusable elements within the dropdown
 */
export function useKeyboardNavigation<T extends HTMLElement>(
  isOpen: boolean,
  containerRef: RefObject<T>,
  onClose: () => void,
  focusableSelector: string = 'a[href], button, [tabindex]:not([tabindex="-1"])',
): void {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!containerRef.current) return;

      const focusableElements = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );

      if (focusableElements.length === 0) return;

      // Close on Escape
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      // Handle Tab key navigation
      if (event.key === 'Tab') {
        // Get the currently focused element
        const currentIndex = focusableElements.findIndex(
          (el) => el === document.activeElement,
        );

        // If Shift+Tab on the first element or Tab on the last element, close dropdown
        if (
          (event.shiftKey && currentIndex === 0) ||
          (!event.shiftKey && currentIndex === focusableElements.length - 1)
        ) {
          onClose();
        }
      }

      // Handle arrow keys
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();

        const currentIndex = focusableElements.findIndex(
          (el) => el === document.activeElement,
        );

        let nextIndex: number;
        if (event.key === 'ArrowDown') {
          nextIndex =
            currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        } else {
          // ArrowUp
          nextIndex =
            currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        }

        focusableElements[nextIndex]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, containerRef, onClose, focusableSelector]);
}
