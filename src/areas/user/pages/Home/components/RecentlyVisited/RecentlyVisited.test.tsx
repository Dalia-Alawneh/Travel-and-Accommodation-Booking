import { render } from "@travelia/tests/testRender";
import RecentlyVisited from "./RecentlyVisited";
import { screen, waitFor } from "@testing-library/react";

describe("RecentlyVisited Display Test", () => {
  it("should render recently visited", async () => {
    render(<RecentlyVisited />);

    await waitFor(() => {
      const hotels = screen.queryAllByTestId("hotel-3");
      expect(hotels.length).toBeGreaterThan(0);
    });
  });
});
