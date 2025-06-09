import { Box, FormControl, InputLabel } from "@mui/material";
import { ReactNode } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface AppDateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
}

const dateInputStyle = {
  border: "none",
  outline: "none",
  fontSize: 14,
  fontWeight: 600,
  pl: 1,
  bgcolor: "transparent",
  flex: 1,
  position: "relative",
  "&::-webkit-calendar-picker-indicator": {
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
};

const AppDateInput = ({ label, value, onChange, icon }: AppDateInputProps) => {
  return (
    <FormControl
      variant="standard"
      sx={{ minWidth: { xs: "100%", md: 150 }, position: "relative" }}
    >
      <InputLabel
        shrink
        sx={{
          fontSize: 14,
          color: "#777",
        }}
      >
        {label}
      </InputLabel>

      <Box
        display="flex"
        alignItems="center"
        mt={2}
        sx={{
          position: "relative",
        }}
      >
        {icon && (
          <Box
            sx={{
              pl: 1,
              pointerEvents: "none",
            }}
          >
            {icon}
          </Box>
        )}

        <Box
          component="input"
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={dateInputStyle}
        />

        <ArrowDropDownIcon
          sx={{
            position: "absolute",
            right: 8,
            pointerEvents: "none",
            color: "#999",
          }}
        />
      </Box>
    </FormControl>
  );
};

export default AppDateInput;
