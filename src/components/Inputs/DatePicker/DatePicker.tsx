import { Box, FormControl, InputLabel } from "@mui/material";
import { ReactNode } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface AppDateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
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

const AppDateInput = ({
  label,
  value,
  onChange,
  icon,
  disabled,
  maxDate,
  minDate,
}: AppDateInputProps) => {
  return (
    <FormControl
      variant="standard"
      sx={{ minWidth: { xs: "100%" }, position: "relative" }}
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
          min={minDate ?? new Date().toISOString().split("T")[0]}
          max={maxDate}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={dateInputStyle}
        />

        <ArrowDropDownIcon
          sx={{
            position: "absolute",
            right: 0,
            pointerEvents: "none",
            color: "#999",
          }}
        />
      </Box>
    </FormControl>
  );
};

export default AppDateInput;
