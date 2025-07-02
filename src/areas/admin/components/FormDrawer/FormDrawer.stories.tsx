import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import FormDrawer from "./FormDrawer";
import { Box, Button } from "@mui/material";
import { action } from "storybook/actions";
import CityForm from "../../pages/Cities/components/CityForm";
const meta: Meta<typeof FormDrawer> = {
  title: "Admin/Drawer/FormDrawer",
  component: FormDrawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormDrawer>;

export const WithCityForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleSubmit = (values: { name: string; description: string }) => {
      action("Form Submitted")(values);
      setOpen(false);
    };

    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open City Form
        </Button>

        <FormDrawer
          open={open}
          onClose={() => setOpen(false)}
          render={() => (
            <CityForm
              title="Add City"
              initialValues={{ name: "", description: "" }}
              onSubmit={handleSubmit}
            />
          )}
        />
      </Box>
    );
  },
};
