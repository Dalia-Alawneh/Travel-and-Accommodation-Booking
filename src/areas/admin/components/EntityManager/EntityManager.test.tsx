import { waitFor } from "@testing-library/dom";
import { render, screen } from "@travelia/tests/testRender";
import EntityManager from "./EntityManager";
import { City } from "@travelia/types";
const mockData = [
  { id: 1, name: "Item One", description: "First item" },
  { id: 2, name: "Item Two", description: "Second item" },
];

const getAll = async () => mockData;
const getPaginated = async () => mockData;
const addItem = async (body: City) => ({ ...body });
const renderForm = (mutate: (body: City) => void) => (
  <div>
    <button onClick={() => mutate({ id: 3, name: "New Item" })}>Submit</button>
  </div>
);

const renderTable = (data: City[]) => (
  <table>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

describe("AdminCrudPage", () => {
  it("renders the title and search input", async () => {
    render(
      <EntityManager
        title="Test Items"
        getAll={getAll}
        getPaginated={getPaginated}
        addItem={addItem}
        renderForm={renderForm}
        renderTable={renderTable}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText("Item One")).toBeInTheDocument();
    });
    expect(screen.getByText("Manage Test Items")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search Test Items"),
    ).toBeInTheDocument();
  });
  it("renders data from getAll", async () => {
    render(
      <EntityManager
        title="Test Items"
        getAll={getAll}
        getPaginated={getPaginated}
        addItem={addItem}
        renderForm={renderForm}
        renderTable={renderTable}
      />,
    );

    expect(await screen.findByText("Item Two")).toBeInTheDocument();
  });
});
