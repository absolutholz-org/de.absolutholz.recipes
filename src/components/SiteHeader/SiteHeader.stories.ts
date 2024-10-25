import type { Meta, StoryObj } from '@storybook/react';

import { SiteHeader } from '.';

const meta = {
  title: 'Components/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
