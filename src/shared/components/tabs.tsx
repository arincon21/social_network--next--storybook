'use client'

import React from 'react';
import Icon from './icon';

export interface TabItem {
  id: string;
  label: string;
  icon: string;
  color?: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, className = '' }) => {
  const createRipple = (event: React.MouseEvent<HTMLSpanElement>, tabId: string) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    // Use a light orange ripple color for tabs
    circle.style.backgroundColor = 'rgba(255, 150, 80, 0.3)';

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
    onTabChange(tabId);
  };

  return (
    <div className={`flex items-center bg-[#fafbfd] ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;


        return (
          <span
            key={tab.id}
            onClick={(e) => createRipple(e, tab.id)}
            className={`flex items-center gap-3 h-[70px] p-5 text-[12px] transition-colors cursor-pointer focus:outline-none relative overflow-hidden ${isActive
              ? 'bg-white text-gray-600 mb-[-1px] pt-[-1px] border-r border-[#e6ecf5]'
              : `text-gray-400 border-r border-[#e6ecf5]`
              }`}
          >
            <Icon name={tab.icon} className={`w-5 h-5 ${isActive ? 'text-orange-500' : 'text-gray-400'}`} />
            <span className="font-medium text-sm">{tab.label}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Tabs;
