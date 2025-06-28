import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("@mui/icons-material", async () => {
  return {
    Warning: () => <div data-testid="mock-icon" />,
  };
});
