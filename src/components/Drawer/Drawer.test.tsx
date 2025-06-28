import { screen, fireEvent } from "@testing-library/react";
import AppDrawer from "./Drawer";
import { vi } from "vitest";
import { Dashboard } from "@mui/icons-material";
import "@testing-library/jest-dom";
import { render } from "@travelia/tests/testRender";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <Dashboard data-testid="dashboard-icon" />,
  },
];

describe("AppDrawer", () => {
  const handleDrawerToggle = vi.fn();

  it("renders menu items and logout button when open", () => {
    render(
      <AppDrawer
        drawerWidth={240}
        menuItems={menuItems}
        isOpen={true}
        handleDrawerToggle={handleDrawerToggle}
      />,
    );

    expect(screen.getByAltText(/travilia/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("calls handleDrawerToggle when clicking a menu item", () => {
    render(
      <AppDrawer
        drawerWidth={240}
        menuItems={menuItems}
        isOpen={true}
        handleDrawerToggle={handleDrawerToggle}
      />,
    );

    const menuButton = screen.getByText(/dashboard/i);
    fireEvent.click(menuButton);

    expect(handleDrawerToggle).toHaveBeenCalled();
  });

  it("calls handleLogout when clicking logout button", () => {
    render(
      <AppDrawer
        drawerWidth={240}
        menuItems={menuItems}
        isOpen={true}
        handleDrawerToggle={handleDrawerToggle}
      />,
    );

    const logoutButton = screen.getByText(/logout/i);
    fireEvent.click(logoutButton);

    expect(handleDrawerToggle).toHaveBeenCalled();
  });
});
