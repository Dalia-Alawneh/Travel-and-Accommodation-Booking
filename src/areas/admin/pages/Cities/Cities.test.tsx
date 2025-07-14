import { fireEvent, waitFor } from "@testing-library/react";
import Cities from "../Cities";
import { render, screen } from "@travelia/tests/testRender";

describe("Cities Page", () => {
  it("should display cities and allow adding a new city", async () => {
    render(<Cities />);
    await waitFor(
      () => {
        expect(screen.getByText(/jenin/i)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );

    fireEvent.click(screen.getByRole("button", { name: /Add City/i }));

    fireEvent.change(screen.getByPlaceholderText(/Enter Name/i), {
      target: { value: "Hebron" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Description/i), {
      target: { value: "Olive city" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    await waitFor(
      () => {
        expect(screen.getByText(/Olive city/i)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
