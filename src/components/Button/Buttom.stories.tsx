import type { Meta, StoryObj } from "@storybook/react-vite";
import AppButton from "./Button";
import { Logout } from "@mui/icons-material";

const meta: Meta<typeof AppButton> = {
  title: "Components/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    appVariant: {
      control: "select",
      options: ["primary", "secondary", "logout", undefined],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    appVariant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Book Now",
    appVariant: "secondary",
  },
};

export const LogoutButton: Story = {
  args: {
    children: (
      <>
        Logout <Logout color="error" sx={{ fontSize: 20 }} />
      </>
    ),
    appVariant: "logout",
  },
};

export const LoadingState: Story = {
  args: {
    children: "Loading...",
    appVariant: "primary",
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    children: "Disabled",
    appVariant: "secondary",
    disabled: true,
  },
};
