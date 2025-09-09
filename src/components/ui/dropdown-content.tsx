import { ReactNode, memo } from "react";

interface DropdownContentProps {
  children: ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
  maxHeight?: string;
  className?: string;
}

const DropdownContent = memo(({ 
  children, 
  isLoading = false, 
  isEmpty = false, 
  emptyMessage = "No hay elementos disponibles",
  maxHeight = "max-h-64",
  className = ""
}: DropdownContentProps) => {
  if (isLoading) {
    return (
      <div className={`${maxHeight} flex items-center justify-center py-8 ${className}`}>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={`${maxHeight} flex items-center justify-center py-8 text-gray-500 text-sm ${className}`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`${maxHeight} overflow-y-auto ${className}`}>
      {children}
    </div>
  );
});

DropdownContent.displayName = 'DropdownContent';

export default DropdownContent;
