import { Drawer, DrawerProps } from "@mui/material";
import { ReactNode } from "react";

interface AppDrawerProps extends Omit<DrawerProps, "children"> {
  open: boolean;
  onClose: () => void;
  render: (closeDrawer: () => void) => ReactNode;
}

const AdminDrawer = ({ open, onClose, render, ...rest }: AppDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} {...rest}>
      {render(onClose)}
    </Drawer>
  );
};

export default AdminDrawer;
