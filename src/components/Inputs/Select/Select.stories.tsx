import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import AppSelect from "./Select";
import { SelectItem } from "@travelia/types";
import { LocationOn } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";

const meta: Meta<typeof AppSelect> = {
  title: "Components/Inputs/AppSelect",
  component: AppSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AppSelect>;

const items: SelectItem[] = [
  { value: "1", text: "Option 1" },
  { value: "2", text: "Option 2" },
  { value: "3", text: "Option 3" },
];

export const Default: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<SelectItem>(items[0]);

    const handleChange = (event: SelectChangeEvent) => {
      const value = event.target.value;
      const found = items.find((item) => item.value === value);
      if (found) setSelectedItem(found);
    };

    return (
      <AppSelect
        {...args}
        items={items}
        item={selectedItem}
        onChange={handleChange}
      />
    );
  },
  args: {
    label: "Select Option",
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<SelectItem>(items[0]);

    const handleChange = (event: SelectChangeEvent) => {
      const value = event.target.value;
      const found = items.find((item) => item.value === value);
      if (found) setSelectedItem(found);
    };
    return (
      <AppSelect
        {...args}
        items={items}
        item={selectedItem}
        onChange={handleChange}
        icon={<LocationOn color="primary" />}
      />
    );
  },
  args: {
    label: "Select Location",
  },
};
