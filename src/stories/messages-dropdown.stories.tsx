import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MessagesDropdown from '@/features/navbar-top/components/messages-dropdown';

const meta = {
  title: 'UI/MessagesDropdown',
  component: MessagesDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessagesDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBadge: Story = {};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    console.log('MessagesDropdown is ready for interaction');
  },
};
