import { render, screen, fireEvent } from "@testing-library/react";
import AppDateInput from "./DatePicker";

test("renders date input with label and triggers change", () => {
  const handleChange = vi.fn();

  render(
    <AppDateInput
      label="Test Date"
      value="2026-06-01"
      onChange={handleChange}
    />,
  );

  const input = screen.getByDisplayValue("2026-06-01");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "2026-06-15" } });
  expect(handleChange).toHaveBeenCalledWith("2026-06-15");
});
