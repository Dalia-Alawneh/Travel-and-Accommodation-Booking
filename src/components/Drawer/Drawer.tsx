import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu } from "@travelia/types";
import logo from "@travelia/assets/images/logo.svg";
import AppButton from "../Button/Button";
import AppLink from "../Link/Link";
import useLogout from "@travelia/hooks/useLogout";
import { Logout } from "@mui/icons-material";

interface IAppDrawerProps {
  drawerWidth: number;
  menuItems: Menu;
  isOpen: boolean;
  handleDrawerToggle: () => void;
  variant?: "permanent" | "persistent" | "temporary";
}

const AppDrawer = ({
  drawerWidth,
  menuItems,
  handleDrawerToggle,
  isOpen,
  variant = "temporary",
}: IAppDrawerProps) => {
  const { handleLogout, loading } = useLogout();
  const display =
    variant === "temporary"
      ? { xs: "block", sm: "none" }
      : { xs: "none", sm: "block" };

  const drawerOpen = variant === "permanent" ? true : isOpen;
  const drawerOnClose =
    variant === "permanent" ? undefined : handleDrawerToggle;

  return (
    <Drawer
      variant={variant}
      open={drawerOpen}
      onClose={drawerOnClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Box sx={{ my: 2 }}>
          <img src={logo} alt="travilia" />
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <AppLink path={item.path} key={item.title}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </AppLink>
          ))}
        </List>
        <AppButton
          onClick={handleLogout}
          loading={loading}
          sx={{ px: "3rem", bgcolor: "#000", color: "#fff" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span>Logout</span> <Logout color="error" sx={{ fontSize: 20 }} />
          </Box>
        </AppButton>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
