import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  render: () => (
    <Card
      title="Basic Comitium Card"
      shadow="lg"
      footer="ComitiumUI - 2025"
    ></Card>
  ),
};
export const MoreAdvancedCard: Story = {
  render: () => (
    <Card
      title="Complex Comitium Card"
      shadow="md"
      withDividers
      footer="ComitiumUI - 2025"
    >
      <Card curved="md">
        <h2>A card within a card with a border</h2>
      </Card>
    </Card>
  ),
};
