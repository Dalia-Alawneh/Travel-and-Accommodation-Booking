import { render, screen, fireEvent } from "@testing-library/react";
import AppSelect from "./Select";
import { vi } from "vitest";
import { SelectItem } from "@travelia/types";

describe("AppSelect", () => {
  const items: SelectItem[] = [
    { value: "1", text: "Option 1" },
    { value: "2", text: "Option 2" },
  ];

  const defaultItem = { value: "1", text: "Option 1" };

  it("should render label and options", () => {
    render(
      <AppSelect
        items={items}
        label="Test Label"
        item={defaultItem}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  it("should render with icon if provided", () => {
    render(
      <AppSelect
        items={items}
        label="Test Label"
        item={defaultItem}
        onChange={() => {}}
        icon={<span data-testid="icon-test">Icon</span>}
      />,
    );

    expect(screen.getByTestId("icon-test")).toBeInTheDocument();
  });

  it("should call onChange when selection changes", () => {
    const handleChange = vi.fn();

    render(
      <AppSelect
        items={items}
        label="Test Label"
        item={defaultItem}
        onChange={handleChange}
      />,
    );

    const selectInput = screen.getByRole("combobox");

    fireEvent.mouseDown(selectInput);

    const option = screen.getByText("Option 2");
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalled();
  });
});
