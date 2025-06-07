import { Button, ButtonProps } from "@mui/material";

interface IAppButtonProps extends ButtonProps {
  title: string;
}

const AppButton = ({ title, sx, ...rest }: IAppButtonProps) => {
  return (
    <Button
      sx={{
        bgcolor: "transparent",
        color: "primary.main",
        ...sx,
      }}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default AppButton;
