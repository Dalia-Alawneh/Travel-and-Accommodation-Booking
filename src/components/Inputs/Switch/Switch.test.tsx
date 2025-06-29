import { render, screen, fireEvent } from "@testing-library/react";
import AppSwitch from "./Switch";
import { Formik, Form } from "formik";
import { vi } from "vitest";

describe("AppSwitch", () => {
  const initialValues = { testSwitch: false };

  const renderComponent = (label?: string, onSubmit = vi.fn()) => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <AppSwitch name="testSwitch" label={label} />
        </Form>
      </Formik>,
    );
  };

  it("should render with default label if no label provided", () => {
    renderComponent();
    expect(screen.getByText("testSwitch")).toBeInTheDocument();
  });

  it("should render with provided label", () => {
    renderComponent("Toggle Me");
    expect(screen.getByText("Toggle Me")).toBeInTheDocument();
  });

  it("should toggle switch and update Formik value", () => {
    const handleSubmit = vi.fn();
    renderComponent("Toggle Me", handleSubmit);

    const switchInput = screen.getByRole("checkbox");

    expect(switchInput).not.toBeChecked();
    fireEvent.click(switchInput);
    expect(switchInput).toBeChecked();
  });
});
