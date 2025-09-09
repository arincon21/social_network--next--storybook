"use client";
import { memo, useMemo, useCallback } from "react";
import { FixedSizeList } from "react-window";

interface VirtualizedListProps {
  items: any[];
  itemHeight: number;
  height: number;
  renderItem: (props: { index: number; style: any; data: any[] }) => JSX.Element;
  className?: string;
  overscan?: number;
}

const VirtualizedList = memo(({ 
  items, 
  itemHeight, 
  height, 
  renderItem,
  className = "",
  overscan = 5
}: VirtualizedListProps) => {
  const memoizedItems = useMemo(() => items, [items]);

  const ItemRenderer = useCallback(({ index, style, data }: any) => {
    return (
      <div style={style}>
        {renderItem({ index, style, data })}
      </div>
    );
  }, [renderItem]);

  if (items.length === 0) {
    return (
      <div className={`flex items-center justify-center py-8 text-gray-500 text-sm ${className}`}>
        No hay elementos disponibles
      </div>
    );
  }

  return (
    <div className={className}>
      <FixedSizeList
        height={height}
        itemCount={items.length}
        itemSize={itemHeight}
        itemData={memoizedItems}
        overscanCount={overscan}
      >
        {ItemRenderer}
      </FixedSizeList>
    </div>
  );
});

VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;
