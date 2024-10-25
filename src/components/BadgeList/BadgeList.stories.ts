import type { Meta, StoryObj } from '@storybook/react';

import { BadgeList } from '.';

const meta = {
  title: 'Components/BadgeList',
  component: BadgeList,
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badges: [
      {
        text: 'Badge 1',
        color: {
          bg: 'bg-indigo-500',
          border: 'border-indigo-500',
          text: 'text-indigo-500',
        },
      },
      {
        text: 'Badge 2',
        color: {
          bg: 'bg-indigo-500',
          border: 'border-indigo-500',
          text: 'text-indigo-500',
        },
        count: 88,
      },
      {
        text: 'Badge 3',
        color: {
          bg: 'bg-indigo-500',
          border: 'border-indigo-500',
          text: 'text-indigo-500',
        },
      },
      {
        text: 'Badge 4',
        color: {
          bg: 'bg-indigo-500',
          border: 'border-indigo-500',
          text: 'text-indigo-500',
        },
      },
      {
        text: 'Badge 5',
        color: {
          bg: 'bg-indigo-500',
          border: 'border-indigo-500',
          text: 'text-indigo-500',
        },
      },
    ],
  },
};
