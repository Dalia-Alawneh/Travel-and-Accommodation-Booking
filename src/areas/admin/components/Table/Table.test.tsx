import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import Table from "./Table";
import { Column } from "./type";
import { render } from "@travelia/tests/testRender";

interface City {
  id: number;
  name: string;
  description: string;
}

const columns: Column<City>[] = [
  { id: "name", label: "City Name" },
  { id: "description", label: "Description" },
];

const rows: City[] = [
  { id: 1, name: "Paris", description: "The city of lights" },
  { id: 2, name: "Tokyo", description: "Modern and traditional blend" },
];

describe("Table Component - Cities Example", () => {
  it("should renders table headers correctly", () => {
    render(
      <Table
        columns={columns}
        rows={rows}
        rowsPerPage={5}
        page={0}
        totalCount={2}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />,
    );

    expect(screen.getByText("City Name")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("should renders city rows with data", () => {
    render(
      <Table
        columns={columns}
        rows={rows}
        rowsPerPage={5}
        page={0}
        totalCount={2}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />,
    );

    expect(screen.getByText("Paris")).toBeInTheDocument();
    expect(screen.getByText("The city of lights")).toBeInTheDocument();
    expect(screen.getByText("Tokyo")).toBeInTheDocument();
    expect(
      screen.getByText("Modern and traditional blend"),
    ).toBeInTheDocument();
  });

  it("renders skeleton rows when loading", () => {
    render(
      <Table
        columns={columns}
        rows={rows}
        isLoading
        skeletonRowsCount={3}
        rowsPerPage={5}
        page={0}
        totalCount={2}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />,
    );

    expect(screen.getAllByRole("row")).toHaveLength(4);
  });

  it("should shows 'No Data Found' when no rows and not loading", () => {
    render(
      <Table
        columns={columns}
        rows={[]}
        rowsPerPage={5}
        page={0}
        totalCount={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />,
    );

    expect(screen.getByText("No Data Found")).toBeInTheDocument();
  });

  it("should calls onPageChange when next page button clicked", () => {
    const onPageChange = vi.fn();

    render(
      <Table
        columns={columns}
        rows={rows}
        rowsPerPage={1}
        page={0}
        totalCount={2}
        onPageChange={onPageChange}
        onRowsPerPageChange={() => {}}
      />,
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalled();
  });

  it("should calls onRowsPerPageChange when rows per page changed", () => {
    const onRowsPerPageChange = vi.fn();

    render(
      <Table
        columns={columns}
        rows={rows}
        rowsPerPage={5}
        page={0}
        totalCount={20}
        onPageChange={() => {}}
        onRowsPerPageChange={onRowsPerPageChange}
      />,
    );
    const rowsPerPageButton = screen.getByLabelText("Rows per page:");
    fireEvent.mouseDown(rowsPerPageButton);

    const option = screen.getByRole("option", { name: "10" });
    fireEvent.click(option);

    expect(onRowsPerPageChange).toHaveBeenCalled();
  });
});
