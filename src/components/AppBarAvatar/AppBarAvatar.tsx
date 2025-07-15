import { AccountCircle, Logout } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import useLogout from "@travelia/hooks/useLogout";
import MenuItemContent from "./MenuItem/MenuItem";

interface IAppBarAvatarMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleMenuClose: () => void;
  username: string;
}

const AppBarAvatarMenu = ({
  anchorEl,
  open,
  handleMenuClose,
  username,
}: IAppBarAvatarMenuProps) => {
  const { handleLogout } = useLogout();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
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
      <MenuItem sx={{ cursor: "default" }}>
        <MenuItemContent
          text={username}
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
