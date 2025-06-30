import { render, screen } from "@testing-library/react";
import AppButton from "./Button";

describe("AppButton", () => {
  it("renders button with children text", () => {
    render(<AppButton>Click Me</AppButton>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    render(<AppButton sx={{ color: "red" }}>Styled Button</AppButton>);
    const button = screen.getByRole("button", { name: /styled button/i });

    expect(button).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
});
