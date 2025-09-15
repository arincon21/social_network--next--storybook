import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NewsFeed } from '@/features/news-feed';

const meta = {
  title: 'Features/NewsFeed',
  component: NewsFeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente de feed de noticias que muestra posts sociales con funcionalidades interactivas como likes, comentarios y shares.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewsFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithInteractions: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Feed con posts que incluyen likes, comentarios y funcionalidades de compartir.',
      },
    },
  },
};

export const SinglePost: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista de un solo post en el feed.',
      },
    },
  },
};