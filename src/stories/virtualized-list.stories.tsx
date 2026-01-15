import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import VirtualizedList from '@/shared/components/virtualized-list';

const meta = {
  title: 'UI/VirtualizedList',
  component: VirtualizedList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of items to render in the list',
      control: { type: 'object' },
    },
    itemHeight: {
      description: 'Height of each item in pixels',
      control: { type: 'number', min: 20, max: 200 },
    },
    height: {
      description: 'Total height of the list container in pixels',
      control: { type: 'number', min: 100, max: 600 },
    },
    overscan: {
      description: 'Number of items to render outside the visible area',
      control: { type: 'number', min: 0, max: 20 },
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof VirtualizedList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleItems = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  description: `This is the description for item ${index + 1}`,
}));

const smallItems = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: `Small Item ${index + 1}`,
  description: `Description ${index + 1}`,
}));

// Simple item renderer
// Simple item renderer
const SimpleItemRenderer = (rawItem: unknown, index: number, style: React.CSSProperties) => {
  const item = rawItem as { name: string; description: string };
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="font-medium">{item.name}</div>
      <div className="text-sm text-gray-600">{item.description}</div>
    </div>
  );
};

// Complex item renderer with avatar
// Complex item renderer with avatar
const ComplexItemRenderer = (rawItem: unknown, index: number, style: React.CSSProperties) => {
  const item = rawItem as { id: number; name: string; description: string };
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50 flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        {item.name.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-600">{item.description}</div>
      </div>
      <div className="text-xs text-gray-400">#{item.id}</div>
    </div>
  );
};

export const Default: Story = {
  args: {
    items: sampleItems,
    itemHeight: 80,
    height: 400,
    renderItem: SimpleItemRenderer,
    overscan: 5,
  },
};

export const SmallList: Story = {
  args: {
    items: smallItems,
    itemHeight: 60,
    height: 300,
    renderItem: SimpleItemRenderer,
    overscan: 2,
  },
};

export const EmptyList: Story = {
  args: {
    items: [],
    itemHeight: 60,
    height: 300,
    renderItem: SimpleItemRenderer,
  },
};

export const ComplexItems: Story = {
  args: {
    items: sampleItems.slice(0, 100),
    itemHeight: 72,
    height: 400,
    renderItem: ComplexItemRenderer,
    overscan: 3,
  },
};

export const TallItems: Story = {
  args: {
    items: sampleItems.slice(0, 50),
    itemHeight: 120,
    height: 400,
    renderItem: (rawItem: unknown, index: number, style: React.CSSProperties) => {
      const item = rawItem as { name: string; description: string };
      return (
        <div className="p-6 border-b border-gray-200 hover:bg-gray-50">
          <div className="font-bold text-lg">{item.name}</div>
          <div className="text-gray-600 mt-2">{item.description}</div>
          <div className="mt-3 flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tag 1</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Tag 2</span>
          </div>
        </div>
      );
    },
    overscan: 2,
  },
};

export const CustomStyling: Story = {
  args: {
    items: sampleItems.slice(0, 200),
    itemHeight: 80,
    height: 400,
    renderItem: SimpleItemRenderer,
    className: 'border-2 border-blue-300 rounded-lg shadow-lg',
    overscan: 5,
  },
};
