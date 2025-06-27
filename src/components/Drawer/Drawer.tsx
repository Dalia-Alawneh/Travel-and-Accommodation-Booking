import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const { handleLogout, loading } = useLogout();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const display =
    variant === "temporary"
      ? { xs: "block", sm: "none" }
      : { xs: "none", sm: "block" };

  const drawerOpen = variant === "permanent" ? true : isOpen;
  const drawerOnClose =
    variant === "permanent" ? undefined : handleDrawerToggle;

  return (
    <Drawer
      variant={!isSmallScreen ? variant : "temporary"}
      open={drawerOpen}
      onClose={drawerOnClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        bgcolor: "white",
        display,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle}>
        <Box sx={{ my: 1.3, ml: 3 }}>
          <img src={logo} alt="travilia" />
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <AppLink path={item.path} key={item.title}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: "auto",
                    px: 2.5,
                  }}
                >
                  {item.icon && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </AppLink>
          ))}
        </List>
        <Divider />
        <AppButton
          onClick={handleLogout}
          loading={loading}
          sx={{ px: "3.6rem", my: 4, ml: 3 }}
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
