import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./index";
import { Button } from "../Button";
import { Card } from "../Card";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const SimpleTabs: Story = {
    render: () => (
        <Tabs
  tabs={[
    { label: "Overview", content: (<Button variant="outline">Click Me!</Button>) },
    { label: "Details", content: <Card>The details are very simple</Card> },
  ]}
  defaultTab={0}
/>
      ),
    };