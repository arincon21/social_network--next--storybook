"use client";
import { ReactNode, memo, useState, useCallback, useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import NotificationBadge from "./notification-badge";
import Icon from "@/components/ui/icon";

interface DropdownBaseProps {
  icon: string;
  badgeCount?: number;
  badgeColor?: 'green' | 'purple' | 'red' | 'blue';
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  testId?: string;
}

const DropdownBase = memo(({ 
  icon, 
  badgeCount, 
  badgeColor = "blue", 
  children, 
  className = "",
  ariaLabel,
  testId
}: DropdownBaseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer transition-all duration-200 focus-ring hover-lift will-change-transform"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-testid={testId}
      >
        <div className="gpu-accelerated">
          <Icon name={icon} className="w-[20px] h-[20px] text-white"/>
        </div>
      </button>
      {badgeCount && (
        <NotificationBadge 
          count={badgeCount} 
          color={badgeColor}
          data-testid={`${testId}-badge`}
        />
      )}
      
      {isOpen && (
        <div 
          ref={containerRef}
          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fade-in hover-lift will-change-transform gpu-accelerated"
          role="dialog"
          aria-modal="false"
          aria-label={ariaLabel}
        >
          {children}
        </div>
      )}
    </div>
  );
});

DropdownBase.displayName = 'DropdownBase';

export default DropdownBase;
