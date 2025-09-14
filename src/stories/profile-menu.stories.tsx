import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProfileMenu from '@/features/navbar-top/components/profile-menu';

const meta = {
  title: 'UI/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InNavbarContext: Story = {
  render: () => (
    <div className="bg-[#45475f] p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold">Social Network</div>
        <ProfileMenu />
      </div>
    </div>
  ),
};

export const WithDarkBackground: Story = {
  render: () => (
    <div className="bg-gray-900 p-8 rounded-lg">
      <ProfileMenu />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click on the profile to see the dropdown menu with various options including:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Profile settings</li>
          <li>Create favorites page</li>
          <li>Logout</li>
          <li>Chat status controls</li>
          <li>Custom status input</li>
          <li>About section links</li>
        </ul>
      </div>
      <div className="bg-[#45475f] p-4 rounded-lg inline-block">
        <ProfileMenu />
      </div>
    </div>
  ),
};
