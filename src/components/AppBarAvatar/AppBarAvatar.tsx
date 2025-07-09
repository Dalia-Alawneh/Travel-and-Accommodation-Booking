import {
  AccountCircle,
  Logout,
  VerifiedUserRounded,
} from "@mui/icons-material";
import { Menu, MenuItem, Box } from "@mui/material";
import useUser from "@travelia/context/user/useContext";
import useLogout from "@travelia/hooks/useLogout";
import MenuItemContent from "./MenuItem/MenuItem";

interface IAppBarAvatarMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleMenuClose: () => void;
}

const AppBarAvatarMenu = ({
  anchorEl,
  open,
  handleMenuClose,
}: IAppBarAvatarMenuProps) => {
  const { handleLogout } = useLogout();
  const { user } = useUser();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ bgColor: "primary.main", cursor: "default" }}>
        <MenuItemContent
          text="User"
          icon={<AccountCircle color="disabled" />}
        />
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <MenuItemContent
          text="Logout"
          icon={<Logout color="error" sx={{ fontSize: 20 }} />}
        />
      </MenuItem>
    </Menu>
  );
};

export default AppBarAvatarMenu;
