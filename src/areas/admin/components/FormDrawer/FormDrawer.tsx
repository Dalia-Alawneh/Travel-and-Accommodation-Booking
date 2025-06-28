import { Drawer, DrawerProps } from "@mui/material";
import { ReactNode } from "react";

interface FormDrawerProps extends Omit<DrawerProps, "children"> {
  open: boolean;
  onClose: () => void;
  render: (closeDrawer: () => void) => ReactNode;
}

const FormDrawer = ({ open, onClose, render, ...rest }: FormDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      sx={{ zIndex: 99999 }}
      open={open}
      onClose={onClose}
      {...rest}
    >
      {render(onClose)}
    </Drawer>
  );
};

export default FormDrawer;
