import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "@travelia/assets/images/logo.svg";
import { DRAWER_WIDTH } from "@travelia/constants";
import AppDrawer from "../Drawer/Drawer";
import AppButton from "../Button/Button";
import { Container } from "@mui/material";
import { Menu } from "@travelia/types";
import AppLink from "../Link/Link";
import useLogout from "@travelia/hooks/useLogout";
import { Logout } from "@mui/icons-material";
import { ReactNode, useState } from "react";
import { userMenuItems } from "@travelia/fixtures";
import { Link } from "react-router";
interface ITopBarProps {
  menuLinks: Menu;
  renderMenu: (menuLinks: Menu) => ReactNode;
  hideLogo?: boolean;
}

export default function TopBar({
  menuLinks,
  renderMenu,
  hideLogo = false,
}: ITopBarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { handleLogout, loading } = useLogout();
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#ffffff", color: "#000" }}
      >
        <Toolbar>
          <Container maxWidth="xl">
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              sx={{
                justifyContent: { xs: "space-between", md: "flex-start" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {!hideLogo && (
                <Box sx={{ my: 2 }}>
                  <Link to="">
                    <img src={logo} alt="travilia" />
                  </Link>
                </Box>
              )}
              {renderMenu(menuLinks)}
              <AppButton
                sx={{ display: { xs: "none", sm: "flex" }, py: 1, ml: 2 }}
                onClick={handleLogout}
                loading={loading}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <span>Logout</span>{" "}
                  <Logout color="error" sx={{ fontSize: 20 }} />
                </Box>
              </AppButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <AppDrawer
          drawerWidth={DRAWER_WIDTH}
          handleDrawerToggle={handleDrawerToggle}
          isOpen={isDrawerOpen}
          menuItems={userMenuItems}
        />
      </nav>
    </Box>
  );
}
