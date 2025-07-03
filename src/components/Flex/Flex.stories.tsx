import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./index";

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  args: {
    children: [
      <div key="1" style={{ background: "#f11", padding: "1rem" }}>
        Child one
      </div>,
      <div key="2" style={{ background: "#a11f87", padding: "1rem" }}>
        Child two
      </div>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const RowOfComponentsWithSpacing: Story = {
  args: {
    spacing: 10,
    direction: "row",
  },
};

export const VerticalFlexedComponents: Story = {
  args: {
    direction: "column",
    spacing: 3,
  },
};
