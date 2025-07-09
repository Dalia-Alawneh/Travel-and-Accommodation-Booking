import { Button, ButtonProps, CircularProgress, Box } from "@mui/material";
import { ReactNode } from "react";

type AppButtonType = "primary" | "secondary" | "logout";

interface IAppButtonProps extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
  appVariant?: AppButtonType;
}

const variantStyles = {
  primary: {
    bgcolor: "custom.skyBlue",
    color: "white",
    px: 4,
    mt: 4,
    "&:hover": {
      bgcolor: "custom.blueDark",
    },
  },
  secondary: {
    bgcolor: "custom.salver",
    color: "primary.dark",
    fontWeight: 600,
    py: 1,
    width: { xs: "100%", sm: "initial" },
    "&:hover": {
      bgcolor: "custom.orange",
      color: "custom.beige",
    },
  },
  logout: {
    bgcolor: "transparent",
    color: "primary.dark",
    py: 1,
    ml: 2,
    textTransform: "none",
  },
};

type StyleType = Record<string, unknown>;

const AppButton = ({
  children,
  loading = false,
  disabled,
  appVariant,
  sx,
  ...rest
}: IAppButtonProps) => {
  const style: StyleType = appVariant ? variantStyles[appVariant] : {};
  return (
    <Button
      disabled={disabled || loading}
      sx={{
        textTransform: "none",
        ...style,
        ...sx,
      }}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          size={24}
          sx={{ color: style.color || "primary.main" }}
        />
      ) : appVariant === "logout" ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {children}
        </Box>
      ) : (
        children
      )}
    </Button>
  );
};

export default AppButton;
