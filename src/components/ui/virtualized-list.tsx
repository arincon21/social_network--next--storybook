"use client";
import { memo, useCallback, CSSProperties, ReactElement } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

interface VirtualizedListProps {
  items: any[];
  itemHeight: number;
  height: number;
  renderItem: (props: { index: number; style: CSSProperties; data: any[] }) => ReactElement;
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
  const ItemRenderer = useCallback(({ index, style, data }: ListChildComponentProps) => {
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
      <List
        height={height}
        itemCount={items.length}
        itemSize={itemHeight}
        itemData={items}
        overscanCount={overscan}
      >
        {ItemRenderer}
      </List>
    </div>
  );
});

VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;
