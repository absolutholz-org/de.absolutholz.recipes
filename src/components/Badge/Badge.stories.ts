import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Badge",
    color: {
      bg: "bg-indigo-500",
      border: "border-indigo-500",
      text: "text-indigo-500",
    },
  },
};

export const WithCount: Story = {
  args: {
    ...Default.args,
    count: 88,
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: "clock",
  },
};

export const AsLink: Story = {
  args: {
    ...Default.args,
    href: "#",
  },
};

export const KitchenSink: Story = {
  args: {
    ...Default.args,
    count: 88,
    href: "#",
    icon: "clock",
  },
};

export const AsSmall: Story = {
  args: {
    ...KitchenSink.args,
    size: "small",
  },
};
