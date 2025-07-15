import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CityForm from "../CityForm";

describe("CityForm", () => {
  it("should submit form with valid data", async () => {
    const handleSubmit = vi.fn();

    render(
      <CityForm
        initialValues={{ name: "", description: "" }}
        onSubmit={handleSubmit}
        title="Add City"
      />,
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter Name/i), {
      target: { value: "Ramallah" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Description/i), {
      target: { value: "Beautiful city" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });

    const [values] = handleSubmit.mock.calls[0];
    expect(values).toEqual({
      name: "Ramallah",
      description: "Beautiful city",
    });
  });
});
