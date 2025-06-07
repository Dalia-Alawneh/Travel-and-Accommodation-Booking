import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "@travelia/assets/images/logo.svg";
import { Button } from "@mui/material";
import theme from "@travelia/theme";
import { DRAWER_WIDTH, menuItems } from "@travelia/fixtures";
import AppDrawer from "../AppDrawer/AppDrawer";

export default function TopBar() {
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
          <Box width="100%" display="flex" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box width="100%" sx={{ my: 2 }}>
              <img src={logo} alt="travilia" />
            </Box>
            <Box
              width="100%"
              sx={{ display: { xs: "none", sm: "flex", gap: "1rem" } }}
            >
              {menuItems.map((item) => (
                <Typography variant="body2" key={item.title}>
                  {item.title}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.primary.main,
                }}
              >
                Signin
              </Button>
            </Box>
          </Box>
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
