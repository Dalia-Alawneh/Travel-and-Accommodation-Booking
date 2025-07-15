import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "./src/mocks/server";
class IntersectionObserverMock {
  constructor() {}
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.mock("@mui/icons-material", async () => {
  return {
    Warning: () => <div data-testid="mock-icon" />,
    Dashboard: () => <div data-testid="mock-icon" />,
    Logout: () => <div data-testid="mock-icon" />,
    DeleteTwoTone: () => <div data-testid="mock-icon" />,
    Edit: () => <div data-testid="mock-icon" />,
    AddCircle: () => <div data-testid="mock-icon" />,
    AccountCircle: () => <div data-testid="mock-icon" />,
    Visibility: () => <div data-testid="mock-icon" />,
    Hotel: () => <div data-testid="mock-icon" />,
    LocationOn: () => <div data-testid="mock-icon" />,
    HotelClass: () => <div data-testid="mock-icon" />,
    CalendarMonthRounded: () => <div data-testid="mock-icon" />,
    HotelOutlined: () => <div data-testid="mock-icon" />,
    People: () => <div data-testid="mock-icon" />,
  };
});

vi.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: vi.fn(),
  },
  success: vi.fn(),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});
