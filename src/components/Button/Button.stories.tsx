import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me!",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Cancel: Story = {
  args: {
    variant: "cancel",
  },
};
