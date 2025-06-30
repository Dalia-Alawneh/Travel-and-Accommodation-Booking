import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import FormDrawer from "./FormDrawer";
import { render } from "@travelia/tests/testRender";

describe("FormDrawer Component", () => {
  it("should renders content when open is true", () => {
    render(
      <FormDrawer
        open={true}
        onClose={() => {}}
        render={() => <div>Drawer Content</div>}
      />,
    );

    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("should does not render content when open is false", () => {
    render(
      <FormDrawer
        open={false}
        onClose={() => {}}
        render={() => <div>Hidden Content</div>}
      />,
    );

    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });

  it("should calls onClose when backdrop is clicked", () => {
    const onClose = vi.fn();

    render(
      <FormDrawer
        open={true}
        onClose={onClose}
        render={() => <div>Drawer Content</div>}
      />,
    );

    const backdrop = document.querySelector('[class*="MuiBackdrop-root"]');
    expect(backdrop).toBeTruthy();

    if (backdrop) fireEvent.click(backdrop);

    expect(onClose).toHaveBeenCalled();
  });

  it("should passes onClose to render function and triggers it", () => {
    const onClose = vi.fn();

    render(
      <FormDrawer
        open={true}
        onClose={onClose}
        render={(close) => (
          <button onClick={close} data-testid="close-btn">
            Close
          </button>
        )}
      />,
    );

    const button = screen.getByTestId("close-btn");
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalled();
  });
});
