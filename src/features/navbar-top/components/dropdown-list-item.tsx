import { memo } from "react";
import OptimizedImage from "@/components/ui/optimized-image";

interface DropdownListItemProps {
  avatar?: string;
  name: string;
  subtitle?: string;
  excerpt?: string;
  time?: string;
  highlight?: string;
  text?: string;
  actions?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  testId?: string;
}

const DropdownListItem = memo(({ 
  avatar, 
  name, 
  subtitle, 
  excerpt, 
  time, 
  highlight,
  text,
  actions, 
  onClick,
  className = "",
  testId
}: DropdownListItemProps) => {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className={`w-full text-left px-4 py-4 flex gap-4 items-start hover:bg-gray-50 hover-lift focus-ring transition-all duration-200 will-change-transform gpu-accelerated ${className}`}
      data-testid={testId}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `${name} ${text || subtitle || ''}` : undefined}
    >
      {avatar && (
        <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0 will-change-transform">
          <OptimizedImage
            src={avatar}
            alt={`Avatar de ${name}`}
            width={40}
            height={40}
            className="object-cover transition-transform duration-200 hover:scale-105"
            priority={false}
          />
        </div>
      )}
      
      <div className="flex-1 min-w-0 gpu-accelerated">
        <div className="text-sm leading-relaxed">
          <span className="font-semibold text-gray-800 will-change-transform">{name}</span>
          {text && (
            <span className="text-gray-700 transition-colors duration-200">
              {" "}
              {highlight ? text.replace(highlight, "") : text}
            </span>
          )}
          {highlight && (
            <span className="text-orange-500 font-medium animate-pulse"> {highlight}</span>
          )}
        </div>
        
        {subtitle && (
          <div className="text-sm text-gray-400 mt-1 transition-colors duration-200">{subtitle}</div>
        )}
        
        {excerpt && (
          <div className="text-sm text-gray-500 mt-1 line-clamp-2 transition-colors duration-200">{excerpt}</div>
        )}
        
        {time && (
          <div className="text-xs text-gray-400 mt-2 font-medium">{time}</div>
        )}
        
        {excerpt && typeof excerpt === 'string' && excerpt.includes('bg-gray-100') && (
          <div className="mt-3 bg-gray-100 p-2 rounded text-sm text-gray-600 inline-block">
            {excerpt}
          </div>
        )}
      </div>
      
      {actions && (
        <div className="flex-shrink-0 will-change-transform transition-transform duration-200 hover:scale-105">
          {actions}
        </div>
      )}
    </Component>
  );
});

DropdownListItem.displayName = 'DropdownListItem';

export default DropdownListItem;
