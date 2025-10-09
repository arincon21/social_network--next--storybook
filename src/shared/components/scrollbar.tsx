"use client";
import { ReactNode, useRef, useState, useEffect, useCallback } from "react";

interface ScrollbarProps {
  /** Content to be scrolled */
  children: ReactNode;
  /** Maximum height of the scrollable container (Tailwind class) */
  maxHeight?: string;
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
  /** Custom scrollbar width (Tailwind class like 'w-1', 'w-2') */
  scrollbarWidth?: string;
  /** Position of scrollbar ('left' | 'right') */
  position?: 'left' | 'right';
}

interface ScrollState {
  scrollPercentage: number;
  canScroll: boolean;
  isScrolling: boolean;
  thumbHeight: number;
  thumbTop: number;
}

const Scrollbar = ({ 
  children, 
  maxHeight = "max-h-96", 
  className = "",
  showIndicator = false,
  trackColor = "bg-gray-300",
  thumbColor = "bg-gray-600",
  thumbHoverColor = "hover:bg-gray-700",
  scrollbarWidth = "w-1",
  position = "left",
}: ScrollbarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollPercentage: 0,
    canScroll: false,
    isScrolling: false,
    thumbHeight: 0,
    thumbTop: 0
  });

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const canScroll = scrollHeight > clientHeight;
    
    if (!canScroll) {
      setScrollState(prev => ({
        ...prev,
        scrollPercentage: 0,
        canScroll: false,
        thumbHeight: 0,
        thumbTop: 0
      }));
      return;
    }

    // Use a fixed track height since we don't have the track ref yet
    const trackHeight = clientHeight - 16; // Account for top/bottom padding (8px each)
    const scrollPercentage = Math.min(100, Math.max(0, (scrollTop / (scrollHeight - clientHeight)) * 100));
    
    // Calculate thumb dimensions
    const thumbHeight = Math.max(20, (clientHeight / scrollHeight) * trackHeight);
    const availableTrackSpace = trackHeight - thumbHeight;
    const thumbTop = Math.min(availableTrackSpace, (scrollTop / (scrollHeight - clientHeight)) * availableTrackSpace);

    setScrollState(prev => ({
      ...prev,
      scrollPercentage,
      canScroll,
      thumbHeight,
      thumbTop
    }));
  }, []);

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

    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const trackHeight = track.clientHeight;
    
    const { scrollHeight, clientHeight } = container;
    const maxScrollTop = scrollHeight - clientHeight;
    
    // Calculate new scroll position
    const newScrollTop = (clickY / trackHeight) * maxScrollTop;
    container.scrollTop = Math.max(0, Math.min(maxScrollTop, newScrollTop));
  }, []);

  const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const startY = e.clientY;
    const startScrollTop = container.scrollTop;
    const { scrollHeight, clientHeight } = container;
    const maxScrollTop = scrollHeight - clientHeight;
    const trackHeight = track.clientHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      const scrollRatio = deltaY / trackHeight;
      const newScrollTop = startScrollTop + (scrollRatio * maxScrollTop);
      container.scrollTop = Math.max(0, Math.min(maxScrollTop, newScrollTop));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

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

  return (
    <div className="relative">
      {/* Custom Scrollbar Track - Only show when scrollable */}
      {scrollState.canScroll && (
        <div 
          ref={trackRef}
          className={`absolute ${position === 'left' ? 'left-1' : 'right-1'} top-2 bottom-2 ${scrollbarWidth} ${trackColor} rounded-sm z-10 cursor-pointer`}
          onClick={handleTrackClick}
        >
          {/* Scrollbar Thumb - Show when scrollable */}
          {scrollState.thumbHeight > 0 && (
            <div 
              ref={thumbRef}
              className={`absolute left-0 w-full ${thumbColor} rounded-sm transition-colors duration-200 ease-out ${thumbHoverColor} cursor-grab active:cursor-grabbing`}
              style={{
                height: `${Math.max(20, scrollState.thumbHeight)}px`,
                top: `${Math.max(0, scrollState.thumbTop)}px`,
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
        className={`${maxHeight} overflow-y-auto overflow-x-hidden ${position === 'left' ? 'pl-4' : 'pr-4'} ${position === 'right' ? 'pl-2' : 'pr-2'} scrollbar-hide relative ${className}`}
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
