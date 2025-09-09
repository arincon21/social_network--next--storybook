import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SkeletonLoader from '@/components/ui/skeleton-loader';

const meta = {
  title: 'UI/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The shape variant of the skeleton',
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular', 'avatar'],
    },
    width: {
      description: 'Width of the skeleton (CSS value)',
      control: { type: 'text' },
    },
    height: {
      description: 'Height of the skeleton (CSS value)',
      control: { type: 'text' },
    },
    count: {
      description: 'Number of skeleton elements to render',
      control: { type: 'number', min: 1, max: 10 },
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SkeletonLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    count: 1,
  },
};

export const MultipleTextLines: Story = {
  args: {
    variant: 'text',
    count: 3,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: '60px',
    height: '60px',
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '200px',
    height: '120px',
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
  },
};

export const CustomSizes: Story = {
  args: {
    variant: 'text',
    width: '300px',
    height: '24px',
    count: 1,
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="border rounded-lg p-4 w-80">
      <div className="flex items-center space-x-3 mb-4">
        <SkeletonLoader variant="avatar" />
        <div className="flex-1">
          <SkeletonLoader variant="text" width="120px" className="mb-2" />
          <SkeletonLoader variant="text" width="80px" height="12px" />
        </div>
      </div>
      <SkeletonLoader variant="rectangular" width="100%" height="160px" className="mb-3" />
      <SkeletonLoader variant="text" count={3} />
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 border rounded">
          <SkeletonLoader variant="circular" width="48px" height="48px" />
          <div className="flex-1">
            <SkeletonLoader variant="text" width="140px" className="mb-2" />
            <SkeletonLoader variant="text" width="100px" height="12px" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-3 border-b">
          <div className="grid grid-cols-4 gap-4">
            <SkeletonLoader variant="text" width="80px" height="16px" />
            <SkeletonLoader variant="text" width="100px" height="16px" />
            <SkeletonLoader variant="text" width="60px" height="16px" />
            <SkeletonLoader variant="text" width="90px" height="16px" />
          </div>
        </div>
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="p-3 border-b last:border-b-0">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center space-x-2">
                <SkeletonLoader variant="circular" width="32px" height="32px" />
                <SkeletonLoader variant="text" width="80px" height="14px" />
              </div>
              <SkeletonLoader variant="text" width="120px" height="14px" />
              <SkeletonLoader variant="rectangular" width="60px" height="20px" />
              <SkeletonLoader variant="text" width="70px" height="14px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  args: {
    variant: 'rectangular',
    width: '200px',
    height: '100px',
    className: 'rounded-xl shadow-lg',
  },
};
