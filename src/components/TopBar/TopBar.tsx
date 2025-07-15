import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { DRAWER_WIDTH } from "@travelia/constants";
import AppDrawer from "../Drawer/Drawer";
import { Avatar, Container } from "@mui/material";
import { Menu } from "@travelia/types";
import { ReactNode, useState } from "react";
import { userMenuItems } from "@travelia/fixtures";
import { Link } from "react-router";
import { logo } from "@travelia/assets";
import useUser from "@travelia/context/user/useContext";
import AppBarAvatarMenu from "../AppBarAvatar";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const { user } = useUser();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
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
              <Box display={{ xs: "none", sm: "flex" }} alignItems="center">
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleProfileMenuOpen}
                  sx={{ p: 0, ml: 3 }}
                >
                  <Avatar sx={{ bgcolor: "primary.main", color: "white" }}>
                    {user?.userType?.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>

                <AppBarAvatarMenu
                  username="User"
                  anchorEl={anchorEl}
                  handleMenuClose={handleMenuClose}
                  open={isMenuOpen}
                />
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
          menuItems={userMenuItems}
        />
      </nav>
    </Box>
  );
}
