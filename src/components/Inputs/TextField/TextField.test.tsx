import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppTextField from "./TextField";

describe("AppTextField", () => {
  it("should renders label text correctly", () => {
    render(<AppTextField label="My Label" />);
    expect(screen.getByText("My Label")).toBeInTheDocument();
  });

  it("should renders TextField with passed props", () => {
    render(<AppTextField label="Email" placeholder="Enter email" />);
    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toBeInTheDocument();
  });

  it("should calls onChange handler", async () => {
    const onChange = vi.fn();
    render(<AppTextField label="Name" onChange={onChange} />);
    const input = screen.getByLabelText("Name");

    await userEvent.type(input, "Hello");
    expect(onChange).toHaveBeenCalled();
  });
});
