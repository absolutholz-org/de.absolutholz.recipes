import type { Meta, StoryObj } from "@storybook/react";

import { FlagIcon } from ".";

const meta = {
  title: "Components/FlagIcon",
  component: FlagIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof FlagIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "fr",
  },
};
