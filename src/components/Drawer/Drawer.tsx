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
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <AppButton
          label="Signin"
          sx={{ px: "3rem", bgcolor: "#000", color: "#fff" }}
        />
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
