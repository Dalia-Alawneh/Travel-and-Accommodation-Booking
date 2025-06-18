import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "@travelia/assets/images/logo.svg";
import { DRAWER_WIDTH, menuItems } from "@travelia/fixtures";
import AppDrawer from "../Drawer/Drawer";
import AppButton from "../Button/Button";
import { Container } from "@mui/material";
import { Menu } from "@travelia/types";
import AppLink from "../Link/Link";
interface ITopBarProps {
  menuLinks: Menu;
}

export default function TopBar({ menuLinks }: ITopBarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
              <Box sx={{ my: 2 }}>
                <AppLink path="">
                  <img src={logo} alt="travilia" />
                </AppLink>
              </Box>
              <Box
                width="100%"
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                    gap: "1rem",
                  },
                  justifyContent: "center",
                }}
              >
                {menuLinks.map((item) => (
                  <Typography variant="body2" key={item.title}>
                    <AppLink path={item.path}>{item.title}</AppLink>
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <AppLink path="login">
                  <AppButton>Signin</AppButton>
                </AppLink>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <AppDrawer
          drawerWidth={DRAWER_WIDTH}
          handleDrawerToggle={handleDrawerToggle}
          isOpen={isDrawerOpen}
          menuItems={menuItems}
        />
      </nav>
    </Box>
  );
}
