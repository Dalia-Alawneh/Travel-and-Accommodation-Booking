import { render } from "@travelia/tests/testRender";
import FeaturedDeals from "./FeaturedDeals";
import { screen, waitFor } from "@testing-library/react";

describe("FeaturedDeals Display Test", () => {
  it("should render the featured deal's", async () => {
    render(<FeaturedDeals />);

    await waitFor(() => {
      const hotels = screen.queryAllByTestId("hotel-2");
      expect(hotels.length).toBeGreaterThan(0);
    });
  });
});
