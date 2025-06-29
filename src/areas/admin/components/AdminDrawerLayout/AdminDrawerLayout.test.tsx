import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import AdminDrawerLayout from "./AdminDrawerLayout";
import { render } from "@travelia/tests/testRender";

describe("AdminDrawerLayout Component", () => {
  it("should renders children content", () => {
    render(
      <AdminDrawerLayout>
        <div>Dashboard Content</div>
      </AdminDrawerLayout>,
    );

    expect(screen.getByText("Dashboard Content")).toBeInTheDocument();
  });

  it("should toggles drawer open/close when icon button is clicked", () => {
    render(
      <AdminDrawerLayout>
        <div>Content</div>
      </AdminDrawerLayout>,
    );

    const toggleButton = screen.getByLabelText(/open drawer/i);
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    const menuItem = screen.getByText(/Dashboard/i);
    expect(menuItem).toBeInTheDocument();
  });
});
