import { RefObject, useEffect } from 'react';
import { useBodyScroll } from './useBodyScroll';

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalRef?: RefObject<HTMLElement | HTMLDivElement | null>;
  resetFn?: () => void;
}

/**
 * Hook to handle common modal functionality
 * @param isOpen - Boolean indicating if the modal is open
 * @param onClose - Function to close the modal
 * @param modalRef - Optional ref to the modal element for click-outside detection
 * @param resetFn - Optional function to reset form state when modal closes
 */
export function useModal({
  isOpen,
  onClose,
  modalRef,
  resetFn,
}: UseModalProps): {
  handleClickOutside: (e: React.MouseEvent) => void;
} {
  // Use existing body scroll hook
  useBodyScroll(isOpen);

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen && resetFn) {
      resetFn();
    }
  }, [isOpen, resetFn]);

  // Handle click outside to close
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef?.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return { handleClickOutside };
}
