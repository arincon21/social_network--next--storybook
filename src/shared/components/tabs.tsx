'use client'

import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  color?: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={`flex items-center bg-gray-100 ${className}`}>
      {tabs.map((tab) => (
        <span
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-3 mr-6 h-[70px] p-6 transition-colors cursor-pointer focus:outline-none ${
            activeTab === tab.id
              ? 'bg-white text-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <tab.icon className="w-6 h-6" />
          <span className="font-medium text-sm">{tab.label}</span>
        </span>
      ))}
    </div>
  );
};

export default Tabs;
