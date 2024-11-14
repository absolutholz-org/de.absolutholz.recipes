import type { Meta, StoryObj } from "@storybook/react";

import { PageContainer } from ".";

const meta = {
  title: "Components/PageContainer",
  component: PageContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};
