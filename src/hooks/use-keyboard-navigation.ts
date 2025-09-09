import { useCallback, useEffect, useRef } from 'react';

interface UseKeyboardNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount: number;
  onSelect?: (index: number) => void;
}

export const useKeyboardNavigation = ({
  isOpen,
  onClose,
  itemCount,
  onSelect
}: UseKeyboardNavigationProps) => {
  const activeIndexRef = useRef(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const focusItem = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll('[role="option"]');
    const item = items[index] as HTMLElement;
    
    if (item) {
      item.focus();
      activeIndexRef.current = index;
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose();
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = Math.min(activeIndexRef.current + 1, itemCount - 1);
        focusItem(nextIndex);
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = Math.max(activeIndexRef.current - 1, 0);
        focusItem(prevIndex);
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (activeIndexRef.current >= 0 && onSelect) {
          onSelect(activeIndexRef.current);
        }
        break;
        
      case 'Home':
        event.preventDefault();
        focusItem(0);
        break;
        
      case 'End':
        event.preventDefault();
        focusItem(itemCount - 1);
        break;
    }
  }, [isOpen, onClose, itemCount, onSelect, focusItem]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Reset active index when opening
      activeIndexRef.current = -1;
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return {
    containerRef,
    activeIndex: activeIndexRef.current,
    focusItem
  };
};
