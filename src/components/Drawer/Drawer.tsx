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
import { Menu, UserActions } from "@travelia/types";
import logo from "@travelia/assets/images/logo.svg";
import AppButton from "../Button/Button";
import AppLink from "../Link/Link";
import useUser from "@travelia/context/user/useContext";
import { USER, TOKEN_KEY } from "@travelia/fixtures";
import { removeFromLocalStorage } from "@travelia/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface IAppDrawerProps {
  drawerWidth: number;
  menuItems: Menu;
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

const AppDrawer = ({
  drawerWidth,
  menuItems,
  handleDrawerToggle,
  isOpen,
}: IAppDrawerProps) => {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      dispatch({ type: UserActions.CLEAR_USER });
      removeFromLocalStorage(USER);
      removeFromLocalStorage(TOKEN_KEY);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Logged out successfully");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
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
          Logout
        </AppButton>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
