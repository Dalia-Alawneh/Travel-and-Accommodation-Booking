import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SortMenu from "./Sort";
import userEvent from "@testing-library/user-event";

const sortOptions = [
  { value: "name", text: "Name" },
  { value: "date", text: "Date" },
];

describe("SortMenu Component", () => {
  it("should render with the selected option text", () => {
    render(
      <SortMenu value="name" sortOptions={sortOptions} onChange={() => {}} />,
    );
    expect(screen.getByText("Sort By Name")).toBeInTheDocument();
  });

  it("should open menu on sort icon click", async () => {
    render(
      <SortMenu value="name" sortOptions={sortOptions} onChange={() => {}} />,
    );
    const button = screen.getByRole("button");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("should call onChange with the selected value and close menu", async () => {
    const onChange = vi.fn();
    render(
      <SortMenu value="name" sortOptions={sortOptions} onChange={onChange} />,
    );
    const button = screen.getByRole("button");

    await userEvent.click(button);
    const menuItemDate = screen.getByText("Date");

    await userEvent.click(menuItemDate);

    expect(onChange).toHaveBeenCalledWith("date");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
