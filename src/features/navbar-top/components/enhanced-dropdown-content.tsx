"use client";
import { ReactNode, memo, useMemo } from "react";
import SkeletonLoader from "@/shared/components/skeleton-loader";
import Scrollbar from "@/shared/components/scrollbar";

interface EnhancedDropdownContentProps {
  children?: ReactNode;
  items?: { id?: string | number;[key: string]: unknown }[];
  renderItem?: (props: { index: number; style: React.CSSProperties; data: { id?: string | number;[key: string]: unknown }[] }) => React.JSX.Element;
  isLoading?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
  maxHeight?: string;
  className?: string;
  useVirtualization?: boolean;
  itemHeight?: number;
  skeletonCount?: number;
  animationDelay?: number;
}

const EnhancedDropdownContent = memo(({
  children,
  items = [],
  renderItem,
  isLoading = false,
  isEmpty = false,
  emptyMessage = "No hay elementos disponibles",
  maxHeight = "max-h-64",
  className = "",
  useVirtualization = false,
  itemHeight = 80,
  skeletonCount = 3,
  animationDelay = 0.1
}: EnhancedDropdownContentProps) => {

  if (isLoading) {
    return (
      <div
        className={`${maxHeight} p-4 space-y-3 animate-fade-in will-change-opacity ${className}`}
        role="status"
        aria-label="Cargando contenido"
      >
        {Array.from({ length: skeletonCount }, (_, index) => (
          <div key={index} className="flex items-center gap-3 animate-slide-in gpu-accelerated" style={{ animationDelay: `${index * 100}ms` }}>
            <SkeletonLoader variant="avatar" />
            <div className="flex-1 space-y-2">
              <SkeletonLoader variant="text" width="60%" />
              <SkeletonLoader variant="text" width="40%" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isEmpty || (items.length === 0 && !children)) {
    return (
      <div
        className={`${maxHeight} flex items-center justify-center py-8 text-gray-500 text-sm animate-fade-in will-change-opacity ${className}`}
        role="status"
        aria-label={emptyMessage}
      >
        <div className="text-center gpu-accelerated">
          <div className="text-2xl mb-2">📭</div>
          <div>{emptyMessage}</div>
        </div>
      </div>
    );
  }

  // Simple virtualization fallback for large lists
  if (useVirtualization && items.length > 50 && renderItem) {
    const visibleItems = items.slice(0, 20); // Show first 20 items
    return (
      <Scrollbar
        maxHeight={maxHeight}
        className={`animate-fade-in will-change-transform ${className}`}
        showIndicator={true}
      >
        <div
          role="listbox"
          aria-label="Lista de elementos"
          tabIndex={0}
        >
          {visibleItems.map((item, index) => (
            <div
              key={item.id || index}
              className="hover:bg-gray-50 hover-lift focus-ring transition-all duration-200 will-change-transform"
              role="option"
              tabIndex={-1}
            >
              {renderItem({ index, style: {}, data: items })}
            </div>
          ))}
          {items.length > 20 && (
            <div className="p-4 text-center text-sm text-gray-500 gpu-accelerated">
              Y {items.length - 20} elementos más...
            </div>
          )}
        </div>
      </Scrollbar>
    );
  }

  // Regular animated list
  return (
    <Scrollbar
      maxHeight={maxHeight}
      className={`animate-fade-in will-change-transform ${className}`}
      showIndicator={true}
    >
      <div
        role="listbox"
        aria-label="Lista de elementos"
        tabIndex={0}
      >
        {children ? (
          <div className="animate-slide-in gpu-accelerated">
            {children}
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={item.id || index}
              className="hover:bg-gray-50 hover-lift focus-ring transition-all duration-200 animate-slide-in will-change-transform"
              style={{ animationDelay: `${index * 50}ms` }}
              role="option"
              tabIndex={-1}
            >
              {renderItem && renderItem({ index, style: {}, data: items })}
            </div>
          ))
        )}
      </div>
    </Scrollbar>
  );
});

EnhancedDropdownContent.displayName = 'EnhancedDropdownContent';

export default EnhancedDropdownContent;
