import { render, screen, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import AppCheckbox from "./Checkbox";
import { vi } from "vitest";

describe("AppCheckbox", () => {
  const initialValues = { amenities: [] };

  const renderComponent = (hasToolTip = false, description?: string) => {
    const option = { name: "Wifi", description };

    return render(
      <Formik initialValues={initialValues} onSubmit={vi.fn()}>
        <AppCheckbox<typeof initialValues>
          option={option}
          fieldName="amenities"
          hasToolTip={hasToolTip}
        />
      </Formik>,
    );
  };

  it("should renders checkbox with label", () => {
    renderComponent();
    expect(screen.getByText("Wifi")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should toggles value on checkbox click", () => {
    renderComponent();

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("should shows tooltip when hasToolTip is true and description exists", async () => {
    renderComponent(true, "High-speed internet");

    expect(screen.getByText("Wifi")).toBeInTheDocument();
    const icon = screen.getByRole("button");
    expect(icon).toBeInTheDocument();

    fireEvent.mouseOver(icon);
    expect(await screen.findByText("High-speed internet")).toBeInTheDocument();
  });

  it("does not show tooltip when hasToolTip is false", () => {
    renderComponent(false, "High-speed internet");

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
