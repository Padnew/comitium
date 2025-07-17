import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => <Button>Default button</Button>,
};

export const OutlinedButton: Story = {
  render: () => <Button variant="outline">Outlined button</Button>,
};

export const CancelButton: Story = {
  render: () => <Button variant="cancel">Cancel</Button>,
};
export const ColouredButton: Story = {
  render: () => (
    <Button colour="orange" variant="outline">
      Orange outlined Button
    </Button>
  ),
};
