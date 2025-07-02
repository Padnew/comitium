import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./index";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const DefaultTextInput: Story = {
  args: {
    variant: "default",
  },
};

export const SensitiveTextInput: Story = {
  args: {
    variant: "sensitive",
  },
};
