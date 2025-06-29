import { screen, fireEvent } from "@testing-library/react";
import CitiesTable from "../CitiesTable";
import { render } from "@travelia/tests/testRender";

const mockedCities = [
  { id: 1, name: "Nablus", description: "City in Palestine" },
  { id: 2, name: "Jenin", description: "Another city" },
];

describe("CitiesTable Integration Test", () => {
  const defaultProps = {
    page: 0,
    rowsPerPage: 10,
    totalCount: 2,
    rowData: mockedCities,
    onPageChange: vi.fn(),
    onRowsPerPageChange: vi.fn(),
  };

  it("should renders cities and opens delete confirmation dialog", async () => {
    render(<CitiesTable {...defaultProps} />);

    expect(await screen.findByText("Nablus")).toBeInTheDocument();
    expect(screen.getByText("Jenin")).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    expect(deleteButtons).toHaveLength(2);
    fireEvent.click(deleteButtons[0]);

    expect(
      await screen.findByText(/Are you sure you want to delete/i),
    ).toBeInTheDocument();
  });
});
