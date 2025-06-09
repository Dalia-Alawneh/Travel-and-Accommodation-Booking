import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { ReactNode } from "react";
import { SelectItem } from "@travelia/types";

type AppSelectProps = Omit<SelectProps, "value" | "onChange"> & {
  items: SelectItem[];
  label: string;
  icon?: ReactNode;
  item: SelectItem;
  onChange: (event: SelectChangeEvent) => void;
};

const AppSelect = ({
  items,
  icon,
  label,
  item,
  onChange,
  ...rest
}: AppSelectProps) => {
  return (
    <FormControl
      variant="standard"
      sx={{ minWidth: 150, position: "relative" }}
    >
      <InputLabel sx={{ fontSize: 14, color: "#777" }}>{label}</InputLabel>
      <Box display="flex" alignItems="center" mt={2}>
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

        <Select
          onChange={(event) => onChange(event as SelectChangeEvent)}
          disableUnderline
          value={item.value}
          {...rest}
          sx={{
            pl: 1,
            fontSize: 14,
            width: "100%",
            fontWeight: 600,
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.text} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
};

export default AppSelect;
