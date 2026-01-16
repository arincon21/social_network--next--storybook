import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { SidebarToggleButton } from '@/features/sidebar-left/components/sidebar-toggle-button';

const meta = {
  title: 'UI/SidebarToggleButton',
  component: SidebarToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      description: 'Whether the sidebar is collapsed',
      control: { type: 'boolean' },
    },
    showLabels: {
      description: 'Whether to show text labels',
      control: { type: 'boolean' },
    },
    onClick: {
      description: 'Click handler function',
      action: 'clicked',
    },
  },
  args: {
    onClick: () => { },
  },
} satisfies Meta<typeof SidebarToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
  args: {
    collapsed: false,
    showLabels: true,
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    showLabels: false,
  },
};

export const ExpandedNoLabels: Story = {
  args: {
    collapsed: false,
    showLabels: false,
  },
};

export const CollapsedWithLabels: Story = {
  args: {
    collapsed: true,
    showLabels: true,
  },
};

export const Interactive: Story = {
  args: {
    collapsed: false,
    showLabels: true,
    onClick: () => { },
  },
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [showLabels, setShowLabels] = React.useState(true);

    const handleToggle = () => {
      if (!collapsed) {
        setShowLabels(false);
        setTimeout(() => setCollapsed(true), 200);
      } else {
        setCollapsed(false);
        setTimeout(() => setShowLabels(true), 200);
      }
    };

    return (
      <div className="w-64 p-4 bg-gray-50 rounded-lg">
        <SidebarToggleButton
          collapsed={collapsed}
          showLabels={showLabels}
          onClick={handleToggle}
        />
        <div className="mt-4 text-sm text-gray-600">
          <p>Collapsed: {collapsed ? 'Yes' : 'No'}</p>
          <p>Show Labels: {showLabels ? 'Yes' : 'No'}</p>
        </div>
      </div>
    );
  },
};

export const InSidebarContext: Story = {
  render: (args) => (
    <div className="w-64 bg-white border-r border-gray-200 h-96">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
        <nav className="space-y-2">
          <SidebarToggleButton {...args} />
          <div className="space-y-1 mt-4">
            <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              <span className="text-sm">Profile</span>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  ),
  args: {
    collapsed: false,
    showLabels: true,
  },
};
