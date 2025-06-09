import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";
import { SelectItem } from "@travelia/types";

type AppSelectProps = {
  items: SelectItem[];
  label: string;
  icon?: ReactNode;
  item: SelectItem;
  onChange: (event: SelectChangeEvent) => void;
};

const AppSelect = ({ items, icon, label, item, onChange }: AppSelectProps) => {
  return (
    <FormControl
      variant="standard"
      sx={{ minWidth: 200, position: "relative" }}
    >
      <InputLabel sx={{ fontSize: 12, color: "#777" }}>{label}</InputLabel>
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
          sx={{
            pl: 1,
            fontSize: 14,
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
