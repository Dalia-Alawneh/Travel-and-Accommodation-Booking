import { fireEvent, render, screen } from "@testing-library/react";
import ConfirmDeleteDialog from "./ConfirmDelete";

describe("ConfirmDeleteDialog", () => {
  it("renders dialog content when open is true", () => {
    render(
      <ConfirmDeleteDialog
        open={true}
        handleClose={vi.fn()}
        onConfirmDelete={vi.fn()}
      />,
    );

    expect(screen.getByText("Confirm Delete")).toBeInTheDocument();
    expect(
      screen.getByText(/are you sure you want to delete this item/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("calls onConfirmDelete when Delete button is clicked", () => {
    const onConfirmDelete = vi.fn();

    render(
      <ConfirmDeleteDialog
        open={true}
        handleClose={vi.fn()}
        onConfirmDelete={onConfirmDelete}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(onConfirmDelete).toHaveBeenCalled();
  });

  it("calls handleClose when Cancel button is clicked", () => {
    const handleClose = vi.fn();

    render(
      <ConfirmDeleteDialog
        open={true}
        handleClose={handleClose}
        onConfirmDelete={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(handleClose).toHaveBeenCalled();
  });
});
