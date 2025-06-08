import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface IAppButtonProps extends ButtonProps {
  label: ReactNode;
}

const AppButton = ({ label, sx, ...rest }: IAppButtonProps) => {
  return (
    <Button
      sx={{
        bgcolor: "transparent",
        color: "primary.main",
        ...sx,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default AppButton;
