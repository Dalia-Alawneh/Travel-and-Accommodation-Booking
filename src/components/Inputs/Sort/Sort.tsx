import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import { SelectItem } from "@travelia/types";

interface SortMenuProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions: SelectItem[] = [
  { text: "None", value: "" },
  { text: "Price: Low to High", value: "priceAsc" },
  { text: "Price: High to Low", value: "priceDesc" },
  { text: "Rating: High to Low", value: "ratingDesc" },
  { text: "Rating: Low to High", value: "ratingAsc" },
  { text: "Name: A to Z", value: "nameAsc" },
  { text: "Name: Z to A", value: "nameDesc" },
];

const SortMenu = ({ value, onChange }: SortMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (selected: string) => {
    onChange(selected);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedOption = sortOptions.find((opt) => opt.value === value);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Tooltip title="Change sorting">
        <IconButton onClick={handleClick}>
          <SortIcon />
        </IconButton>
      </Tooltip>

      {selectedOption?.value && (
        <Typography fontSize={14} fontWeight={500}>
          Sort By {selectedOption.text}
        </Typography>
      )}

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {sortOptions.map((opt) => (
          <MenuItem
            key={opt.value}
            selected={opt.value === value}
            onClick={() => handleChange(opt.value.toString())}
          >
            {opt.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SortMenu;
