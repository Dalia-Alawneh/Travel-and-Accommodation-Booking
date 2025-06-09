import { Box, FormControl, Popover, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

type Props = {
  label: string;
  icon?: ReactNode;
  displayValue: string;
  children: ReactNode;
};

const PopoverSelect = ({ label, icon, displayValue, children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <Typography sx={{ fontSize: 12, color: "#777", border: "none" }}>
          {label}
        </Typography>
        <Box
          px={1}
          py={1}
          display="flex"
          alignItems="center"
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            color: "#000",
          }}
        >
          {icon && <Box sx={{ pr: 1, color: "#888" }}>{icon}</Box>}
          <Typography sx={{ fontSize: "14px" }}>{displayValue}</Typography>
        </Box>
      </FormControl>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box p={1}>{children}</Box>
      </Popover>
    </>
  );
};

export default PopoverSelect;
