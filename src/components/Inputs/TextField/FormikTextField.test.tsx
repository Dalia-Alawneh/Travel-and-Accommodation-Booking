import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormikTextField from "./FormikTextField";
import { Formik, Form } from "formik";

test("should renders FormikTextField and shows error on blur then hides after valid input", async () => {
  render(
    <Formik
      initialValues={{ username: "" }}
      onSubmit={() => {}}
      validate={(values) => {
        const errors: { username?: string } = {};
        if (!values.username) errors.username = "Required";
        return errors;
      }}
    >
      <Form>
        <FormikTextField name="username" label="Username" />
      </Form>
    </Formik>,
  );

  const input = screen.getByRole("textbox");
  fireEvent.blur(input);
  expect(await screen.findByText("Required")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "dalia" } });
  fireEvent.blur(input);
  await waitFor(() => {
    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });
});
