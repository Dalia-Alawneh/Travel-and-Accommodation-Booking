import { render, screen, fireEvent } from "@testing-library/react";
import PopoverSelect from "./PopoverSelect";
import { Box } from "@mui/material";
import "@testing-library/jest-dom";

describe("PopoverSelect", () => {
  it("should renders correctly with icon, label, and display value", () => {
    render(
      <PopoverSelect label="Guest" displayValue="2 Adults, 1 Children, 1 Rooms">
        <Box>
          <div>Adults Counter</div>
          <div>Children Counter</div>
          <div>Rooms Counter</div>
        </Box>
      </PopoverSelect>,
    );

    expect(screen.getByText("Guest")).toBeInTheDocument();
    expect(
      screen.getByText("2 Adults, 1 Children, 1 Rooms"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("2 Adults, 1 Children, 1 Rooms"));
    expect(screen.getByText("Adults Counter")).toBeInTheDocument();
    expect(screen.getByText("Children Counter")).toBeInTheDocument();
    expect(screen.getByText("Rooms Counter")).toBeInTheDocument();
  });
});
