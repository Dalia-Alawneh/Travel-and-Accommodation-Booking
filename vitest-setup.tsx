import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "./src/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.mock("@mui/icons-material", async () => {
  return {
    Warning: () => <div data-testid="mock-icon" />,
    Dashboard: () => <div data-testid="mock-icon" />,
    Logout: () => <div data-testid="mock-icon" />,
  };
});
