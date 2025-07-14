import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./index";
import { Button } from "../Button";
import { Card } from "../Card";
import { Text } from "../Text";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const SimpleTabs: Story = {
  render: () => (
    <Tabs
      colour="red"
      tabs={[
        {
          label: "Button Tab",
          content: (
            <Button
              variant="outline"
              onClick={() => window.alert("Star comitium UI on GitHub")}
            >
              Click Me!
            </Button>
          ),
        },
        {
          label: "Card Tab",
          content: <Card>The details are very simple</Card>,
        },
        {
          label: "Text Tab",
          content: <Text weight="bold">Star this project!</Text>,
        },
      ]}
      defaultTab={0}
    />
  ),
};
