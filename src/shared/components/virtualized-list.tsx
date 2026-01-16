"use client";
import { memo, useCallback, CSSProperties, ReactElement, useState, useRef } from "react";

// Generic interface for better type safety
interface VirtualizedListProps<T = unknown> {
  items: T[];
  itemHeight: number;
  height: number;
  renderItem: (item: T, index: number, style: CSSProperties) => ReactElement;
  className?: string;
  overscan?: number;
  width?: number | string;
}

const VirtualizedListInner = <T,>({
  items,
  itemHeight,
  height,
  renderItem,
  className = "",
  overscan = 5,
  width = "100%"
}: VirtualizedListProps<T>): ReactElement => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate visible range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + height) / itemHeight) + overscan
  );

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Early return for empty state
  if (!items || items.length === 0) {
    return (
      <div
        className={`flex items-center justify-center py-8 text-gray-500 text-sm ${className}`}
        style={{ height }}
      >
        No hay elementos disponibles
      </div>
    );
  }

  const totalHeight = items.length * itemHeight;
  const visibleItems = [];

  for (let i = startIndex; i <= endIndex; i++) {
    const item = items[i];
    const style: CSSProperties = {
      position: 'absolute',
      top: i * itemHeight,
      left: 0,
      right: 0,
      height: itemHeight,
    };

    visibleItems.push(
      <div key={i} style={style}>
        {renderItem(item, i, style)}
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        ref={containerRef}
        style={{
          height,
          width,
          overflow: 'auto',
          position: 'relative',
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

// Create the memoized component with proper typing
const VirtualizedList = memo(VirtualizedListInner) as <T>(props: VirtualizedListProps<T>) => ReactElement;

// Add displayName for debugging
(VirtualizedList as React.NamedExoticComponent).displayName = 'VirtualizedList';

export default VirtualizedList;
export type { VirtualizedListProps };
