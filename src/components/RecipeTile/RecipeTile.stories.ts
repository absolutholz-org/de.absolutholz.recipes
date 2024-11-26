import type { Meta, StoryObj } from "@storybook/react";

import { RecipeTile } from ".";

const meta = {
  title: "Components/RecipeTile",
  component: RecipeTile,
  tags: ["autodocs"],
} satisfies Meta<typeof RecipeTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Recipe Tile",
    category: "drinks",
    slug: "#",
    ingredientCount: 99,
  },
};
