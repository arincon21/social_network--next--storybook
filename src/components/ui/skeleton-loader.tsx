import { memo } from "react";

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'avatar';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

const SkeletonLoader = memo(({ 
  variant = 'text', 
  width, 
  height, 
  className = "",
  count = 1
}: SkeletonLoaderProps) => {
  const getSkeletonClasses = () => {
    const baseClasses = "animate-pulse bg-gray-200";
    
    switch (variant) {
      case 'circular':
        return `${baseClasses} rounded-full`;
      case 'rectangular':
        return `${baseClasses} rounded`;
      case 'avatar':
        return `${baseClasses} rounded-full w-10 h-10`;
      case 'text':
      default:
        return `${baseClasses} rounded h-4`;
    }
  };

  const skeletonStyle = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1rem' : undefined)
  };

  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${getSkeletonClasses()} ${className}`}
      style={skeletonStyle}
    />
  ));

  return count === 1 ? skeletons[0] : <div className="space-y-2">{skeletons}</div>;
});

SkeletonLoader.displayName = 'SkeletonLoader';

export default SkeletonLoader;
