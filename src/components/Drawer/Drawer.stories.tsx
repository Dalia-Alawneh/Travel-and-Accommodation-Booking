import AppDrawer from "./Drawer";
import { Box } from "@mui/material";
import { Home, Info } from "@mui/icons-material";
import { useState } from "react";
import type { Menu } from "@travelia/types";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AppDrawer> = {
  title: "Components/AppDrawer",
  component: AppDrawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof AppDrawer>;

const menuItems: Menu = [
  { title: "Home", path: "/", icon: <Home /> },
  { title: "Search", path: "/search", icon: <Info /> },
];

export const Temporary: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Box sx={{ height: "100vh", maxWidth: 500 }}>
        <AppDrawer
          drawerWidth={240}
          menuItems={menuItems}
          isOpen={isOpen}
          handleDrawerToggle={() => setIsOpen(!isOpen)}
          variant="temporary"
          sx={{ display: "block" }}
        />
      </Box>
    );
  },
};

export const Permanent: Story = {
  render: () => (
    <Box sx={{ height: "100vh" }}>
      <AppDrawer
        drawerWidth={240}
        menuItems={menuItems}
        isOpen={true}
        handleDrawerToggle={() => {}}
        variant="permanent"
      />
    </Box>
  ),
};

export const Persistent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Box sx={{ height: "100vh" }}>
        <AppDrawer
          drawerWidth={240}
          menuItems={menuItems}
          isOpen={isOpen}
          handleDrawerToggle={() => setIsOpen(!isOpen)}
          variant="persistent"
        />
      </Box>
    );
  },
};
