import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./index";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const DefaultDivider: Story = {
  args: {},
};

export const VerticalDivider: Story = {
  render: () => (
    <div
      style={{
        height: "200px", // Parent component needs a height for Divider to fill
        display: "flex",
      }}
    >
      <Divider orientation="vertical" />
    </div>
  ),
};
