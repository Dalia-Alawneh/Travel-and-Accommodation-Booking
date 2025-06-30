import { render, screen, fireEvent } from "@testing-library/react";
import AppDateInput from "./DatePicker";

test("should renders date input with label and triggers change", () => {
  const handleChange = vi.fn();

  const today = new Date().toISOString().split("T")[0];
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 5);
  const futureDateString = futureDate.toISOString().split("T")[0];

  render(
    <AppDateInput label="Test Date" value={today} onChange={handleChange} />,
  );

  const input = screen.getByDisplayValue(today);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: futureDateString } });
  expect(handleChange).toHaveBeenCalledWith(futureDateString);
});
