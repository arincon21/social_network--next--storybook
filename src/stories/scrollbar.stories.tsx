import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Scrollbar from '@/components/ui/scrollbar';

const meta = {
  title: 'UI/Scrollbar',
  component: Scrollbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxHeight: {
      description: 'Maximum height of the scrollable container (Tailwind class)',
      control: { type: 'text' },
    },
    className: {
      description: 'Additional CSS classes for the container',
      control: { type: 'text' },
    },
    trackColor: {
      description: 'Custom scrollbar track color',
      control: { type: 'text' },
    },
    thumbColor: {
      description: 'Custom scrollbar thumb color',
      control: { type: 'text' },
    },
    thumbHoverColor: {
      description: 'Custom scrollbar thumb hover color',
      control: { type: 'text' },
    },
    scrollbarWidth: {
      description: 'Custom scrollbar width (Tailwind class)',
      control: { type: 'select' },
      options: ['w-1', 'w-2', 'w-3', 'w-4'],
    },
    position: {
      description: 'Position of scrollbar',
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    disableFadeEffects: {
      description: 'Disable fade effects at top/bottom',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const longContent = Array.from({ length: 50 }, (_, i) => (
  <div key={i} className="p-3 border-b border-gray-200">
    <h4 className="font-medium">Item {i + 1}</h4>
    <p className="text-sm text-gray-600">
      This is some sample content for item {i + 1}. It demonstrates how the scrollbar works with varying content lengths.
    </p>
  </div>
));

const shortContent = Array.from({ length: 3 }, (_, i) => (
  <div key={i} className="p-3 border-b border-gray-200">
    <h4 className="font-medium">Short Item {i + 1}</h4>
    <p className="text-sm text-gray-600">Short content that doesn't require scrolling.</p>
  </div>
));

export const Default: Story = {
  args: {
    maxHeight: 'max-h-96',
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const ShortContent: Story = {
  args: {
    maxHeight: 'max-h-96',
    children: <div className="space-y-0">{shortContent}</div>,
  },
};

export const CustomColors: Story = {
  args: {
    maxHeight: 'max-h-80',
    trackColor: 'bg-blue-200',
    thumbColor: 'bg-blue-600',
    thumbHoverColor: 'hover:bg-blue-700',
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const RightPosition: Story = {
  args: {
    maxHeight: 'max-h-96',
    position: 'right',
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const WideScrollbar: Story = {
  args: {
    maxHeight: 'max-h-96',
    scrollbarWidth: 'w-3',
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const NoFadeEffects: Story = {
  args: {
    maxHeight: 'max-h-96',
    disableFadeEffects: true,
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const CustomStyling: Story = {
  args: {
    maxHeight: 'max-h-80',
    className: 'border-2 border-gray-300 rounded-lg bg-gray-50',
    children: <div className="space-y-0">{longContent}</div>,
  },
};

export const ChatMessages: Story = {
  args: {
    maxHeight: 'max-h-96',
    className: 'w-80 p-4 bg-white border rounded-lg',
    children: (
      <div>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className={`flex ${i % 3 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${
              i % 3 === 0 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              <p className="text-sm">
                {i % 3 === 0 
                  ? `This is my message ${i + 1}` 
                  : `This is a received message ${i + 1}. It might be longer to show how text wraps.`
                }
              </p>
              <span className="text-xs opacity-75">
                {new Date(Date.now() - (30 - i) * 60000).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

export const FileList: Story = {
  args: {
    maxHeight: 'max-h-96',
    className: 'w-80 bg-white border rounded-lg',
    children: (
      <div>
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
              <span className="text-xs font-medium text-blue-600">
                {['📄', '📁', '🖼️', '📊'][i % 4]}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">
                {['document', 'folder', 'image', 'spreadsheet'][i % 4]}_{i + 1}.{['txt', 'dir', 'jpg', 'xlsx'][i % 4]}
              </div>
              <div className="text-xs text-gray-500">
                {Math.floor(Math.random() * 1000)}KB • Modified {i + 1} days ago
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};
