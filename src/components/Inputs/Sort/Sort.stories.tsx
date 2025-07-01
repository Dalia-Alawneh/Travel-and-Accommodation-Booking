import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import SortMenu from "./Sort";
import { SelectItem } from "@travelia/types";

const meta: Meta<typeof SortMenu> = {
  title: "Components/inputs/SortMenu",
  component: SortMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SortMenu>;

const options: SelectItem[] = [
  { value: "name_asc", text: "Name (A-Z)" },
  { value: "name_desc", text: "Name (Z-A)" },
  { value: "date_new", text: "Date (Newest)" },
  { value: "date_old", text: "Date (Oldest)" },
];

export const Default: Story = {
  args: {
    sortOptions: options,
    value: "name_asc",
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.value);

    return <SortMenu {...args} value={selected} onChange={setSelected} />;
  },
};
