import { render } from "@travelia/tests/testRender";
import { screen, waitFor } from "@testing-library/react";
import TrendingDestinations from "./TrendingDestinations";

describe("TrendingDestinations Test", () => {
  it("should render trending destinations", async () => {
    render(<TrendingDestinations />);

    await waitFor(() => {
      const destination = screen.queryAllByTestId("New York");
      expect(destination.length).toBeGreaterThan(0);
    });
  });
});
