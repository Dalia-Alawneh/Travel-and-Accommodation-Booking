import { Logout } from "@mui/icons-material";
import { Menu, MenuItem, Box } from "@mui/material";
import useUser from "@travelia/context/user/useContext";
import useLogout from "@travelia/hooks/useLogout";

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
        {user?.userType ?? "Admin"}
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <span>Logout</span> <Logout color="error" sx={{ fontSize: 20 }} />
        </Box>
      </MenuItem>
    </Menu>
  );
};

export default AppBarAvatarMenu;
