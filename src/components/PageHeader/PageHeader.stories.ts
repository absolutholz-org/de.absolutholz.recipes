import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from ".";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    h1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};
