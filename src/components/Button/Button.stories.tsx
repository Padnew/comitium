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

export const DefaultButton: Story = {
  args: {
    variant: "default",
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: "outline",
  },
};

export const CancelButton: Story = {
  args: {
    variant: "cancel",
  },
};
export const ColouredButton: Story = {
  render: () => <Button colour="orange">Orange Button</Button>,
};
