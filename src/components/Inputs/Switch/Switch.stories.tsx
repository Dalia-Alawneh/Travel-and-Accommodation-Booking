import type { Meta, StoryObj } from "@storybook/react-vite";
import { Formik, Form } from "formik";
import AppSwitch from "./Switch";

const meta: Meta<typeof AppSwitch> = {
  title: "Components/AppSwitch",
  component: AppSwitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppSwitch>;

export const Default: Story = {
  render: () => (
    <Formik initialValues={{ name: false }} onSubmit={() => {}}>
      {() => (
        <Form>
          <AppSwitch name="name" label="Enable Feature" />
        </Form>
      )}
    </Formik>
  ),
};
