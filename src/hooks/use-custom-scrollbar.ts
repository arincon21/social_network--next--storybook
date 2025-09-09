"use client";
import { useEffect, useRef, useCallback } from 'react';

interface UseCustomScrollbarProps {
  containerRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
}

export const useCustomScrollbar = ({ containerRef, contentRef }: UseCustomScrollbarProps) => {
  const thumbRef = useRef<HTMLElement | null>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

  const updateThumbPosition = useCallback(() => {
    if (!containerRef.current || !thumbRef.current) return;

    const container = containerRef.current;
    const thumb = thumbRef.current;
    
    const scrollRatio = container.scrollTop / (container.scrollHeight - container.clientHeight);
    const thumbTrackHeight = container.clientHeight - 16; // 8px margin top/bottom
    const thumbHeight = Math.max(20, (container.clientHeight / container.scrollHeight) * thumbTrackHeight);
    const thumbTop = 8 + (scrollRatio * (thumbTrackHeight - thumbHeight));

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${thumbTop}px`;
  }, [containerRef]);

  const handleScroll = useCallback(() => {
    updateThumbPosition();
    
    // Add scrolling class for visual feedback
    if (containerRef.current) {
      containerRef.current.classList.add('scrolling');
      setTimeout(() => {
        containerRef.current?.classList.remove('scrolling');
      }, 150);
    }
  }, [containerRef, updateThumbPosition]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !thumbRef.current) return;
    
    isDragging.current = true;
    startY.current = e.clientY;
    startScrollTop.current = containerRef.current.scrollTop;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    e.preventDefault();
  }, [containerRef]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const deltaY = e.clientY - startY.current;
    const container = containerRef.current;
    const scrollRatio = deltaY / (container.clientHeight - 16);
    const newScrollTop = startScrollTop.current + (scrollRatio * (container.scrollHeight - container.clientHeight));
    
    container.scrollTop = Math.max(0, Math.min(newScrollTop, container.scrollHeight - container.clientHeight));
  }, [containerRef]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create custom scrollbar thumb
    const thumb = container.querySelector('::after') as HTMLElement;
    thumbRef.current = thumb;

    container.addEventListener('scroll', handleScroll);
    
    // Initial position update
    updateThumbPosition();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [containerRef, handleScroll, handleMouseMove, handleMouseUp, updateThumbPosition]);

  return {
    handleMouseDown,
    updateThumbPosition
  };
};
