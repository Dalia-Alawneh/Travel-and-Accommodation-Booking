import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface IAppButtonProps extends ButtonProps {
  children: ReactNode;
}

const AppButton = ({ children, sx, ...rest }: IAppButtonProps) => {
  return (
    <Button
      sx={{
        bgcolor: "transparent",
        color: "primary.dark",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
