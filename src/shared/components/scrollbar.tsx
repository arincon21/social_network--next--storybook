"use client";
import { ReactNode, useRef, useState, useEffect, useCallback } from "react";

interface ScrollbarProps {
  /** Content to be scrolled */
  children: ReactNode;
  /** Maximum height of the scrollable container (Tailwind class) */
  maxHeight?: string;
  /** Maximum width of the scrollable container (Tailwind class) */
  maxWidth?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Show scroll position indicators (deprecated - not currently used) */
  showIndicator?: boolean;
  /** Custom scrollbar track color */
  trackColor?: string;
  /** Custom scrollbar thumb color */
  thumbColor?: string;
  /** Custom scrollbar thumb hover color */
  thumbHoverColor?: string;
  /** Custom scrollbar width/height (Tailwind class like 'w-1', 'w-2', 'h-1', 'h-2') */
  scrollbarWidth?: string;
  /** Position of scrollbar ('left' | 'right' | 'top' | 'bottom') */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** Direction of scroll ('vertical' | 'horizontal') */
  direction?: 'vertical' | 'horizontal';
}

interface ScrollState {
  scrollPercentage: number;
  canScroll: boolean;
  isScrolling: boolean;
  thumbSize: number;
  thumbPosition: number;
}

const Scrollbar = ({
  children,
  maxHeight = "max-h-96",
  maxWidth,
  className = "",
  trackColor = "bg-gray-300",
  thumbColor = "bg-gray-600",
  thumbHoverColor = "hover:bg-gray-700",
  scrollbarWidth = "w-1",
  position = "left",
  direction = "vertical",
}: ScrollbarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollPercentage: 0,
    canScroll: false,
    isScrolling: false,
    thumbSize: 0,
    thumbPosition: 0
  });

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const isHorizontal = direction === 'horizontal';
    const scrollPos = isHorizontal ? container.scrollLeft : container.scrollTop;
    const scrollSize = isHorizontal ? container.scrollWidth : container.scrollHeight;
    const clientSize = isHorizontal ? container.clientWidth : container.clientHeight;
    const canScroll = scrollSize > clientSize;

    if (!canScroll) {
      setScrollState(prev => ({
        ...prev,
        scrollPercentage: 0,
        canScroll: false,
        thumbSize: 0,
        thumbPosition: 0
      }));
      return;
    }

    // Use a fixed track size
    const trackSize = clientSize - 16; // Account for padding (8px each side)
    const scrollPercentage = Math.min(100, Math.max(0, (scrollPos / (scrollSize - clientSize)) * 100));

    // Calculate thumb dimensions
    const thumbSize = Math.max(20, (clientSize / scrollSize) * trackSize);
    const availableTrackSpace = trackSize - thumbSize;
    const thumbPosition = Math.min(availableTrackSpace, (scrollPos / (scrollSize - clientSize)) * availableTrackSpace);

    setScrollState(prev => ({
      ...prev,
      scrollPercentage,
      canScroll,
      thumbSize,
      thumbPosition
    }));
  }, [direction]);

  const handleScroll = useCallback(() => {
    updateScrollState();

    setScrollState(prev => ({ ...prev, isScrolling: true }));

    // Clear scrolling state after a delay
    const timeoutId = setTimeout(() => {
      setScrollState(prev => ({ ...prev, isScrolling: false }));
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [updateScrollState]);

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const isHorizontal = direction === 'horizontal';
    const trackRect = track.getBoundingClientRect();
    const clickPos = isHorizontal ? e.clientX - trackRect.left : e.clientY - trackRect.top;
    const trackSize = isHorizontal ? track.clientWidth : track.clientHeight;

    const scrollSize = isHorizontal ? container.scrollWidth : container.scrollHeight;
    const clientSize = isHorizontal ? container.clientWidth : container.clientHeight;
    const maxScroll = scrollSize - clientSize;

    // Calculate new scroll position
    const newScroll = (clickPos / trackSize) * maxScroll;
    if (isHorizontal) {
      container.scrollLeft = Math.max(0, Math.min(maxScroll, newScroll));
    } else {
      container.scrollTop = Math.max(0, Math.min(maxScroll, newScroll));
    }
  }, [direction]);

  const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const isHorizontal = direction === 'horizontal';
    const startPos = isHorizontal ? e.clientX : e.clientY;
    const startScroll = isHorizontal ? container.scrollLeft : container.scrollTop;
    const scrollSize = isHorizontal ? container.scrollWidth : container.scrollHeight;
    const clientSize = isHorizontal ? container.clientWidth : container.clientHeight;
    const maxScroll = scrollSize - clientSize;
    const trackSize = isHorizontal ? track.clientWidth : track.clientHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const currentPos = isHorizontal ? e.clientX : e.clientY;
      const delta = currentPos - startPos;
      const scrollRatio = delta / trackSize;
      const newScroll = startScroll + (scrollRatio * maxScroll);
      if (isHorizontal) {
        container.scrollLeft = Math.max(0, Math.min(maxScroll, newScroll));
      } else {
        container.scrollTop = Math.max(0, Math.min(maxScroll, newScroll));
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });

    // Initial state with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateScrollState();
    }, 100);

    // Update on content changes
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateScrollState, 50);
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [handleScroll, updateScrollState]);

  const isHorizontal = direction === 'horizontal';

  return (
    <div className="relative">
      {/* Custom Scrollbar Track - Only show when scrollable */}
      {scrollState.canScroll && (
        <div
          ref={trackRef}
          className={`absolute ${isHorizontal
            ? `${position === 'top' ? 'top-1' : 'bottom-1'} left-2 right-2 h-1 ${trackColor}`
            : `${position === 'left' ? 'left-1' : 'right-1'} top-2 bottom-2 ${scrollbarWidth} ${trackColor}`
            } rounded-sm z-10 cursor-pointer`}
          onClick={handleTrackClick}
        >
          {/* Scrollbar Thumb - Show when scrollable */}
          {scrollState.thumbSize > 0 && (
            <div
              ref={thumbRef}
              className={`absolute ${isHorizontal ? 'top-0 h-full' : 'left-0 w-full'} ${thumbColor} rounded-sm transition-colors duration-200 ease-out ${thumbHoverColor} cursor-grab active:cursor-grabbing`}
              style={isHorizontal ? {
                width: `${Math.max(20, scrollState.thumbSize)}px`,
                left: `${Math.max(0, scrollState.thumbPosition)}px`,
                backgroundColor: scrollState.isScrolling ? '#374151' : undefined
              } : {
                height: `${Math.max(20, scrollState.thumbSize)}px`,
                top: `${Math.max(0, scrollState.thumbPosition)}px`,
                backgroundColor: scrollState.isScrolling ? '#374151' : undefined
              }}
              onMouseDown={handleThumbMouseDown}
            />
          )}
        </div>
      )}

      {/* Content Container */}
      <div
        ref={containerRef}
        className={`${isHorizontal ? maxWidth || 'w-full' : maxHeight} ${isHorizontal
          ? `overflow-x-auto overflow-y-hidden ${position === 'top' ? 'pt-4' : 'pb-4'}`
          : `overflow-y-auto overflow-x-hidden ${position === 'left' ? 'pl-4' : 'pr-4'} ${position === 'right' ? 'pl-2' : 'pr-2'}`
          } scrollbar-hide relative ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div ref={contentRef} className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;
