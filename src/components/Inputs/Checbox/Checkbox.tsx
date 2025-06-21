import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  FormControlLabel,
  Typography,
  Tooltip,
  IconButton,
  Checkbox,
} from "@mui/material";
import { CheckboxItem } from "@travelia/types";

interface ICheckboxItem {
  option: CheckboxItem;
  hasToolTip: boolean;
}

const AppCheckbox = ({ option, hasToolTip }: ICheckboxItem) => {
  return (
    <FormControlLabel
      key={option.name}
      control={<Checkbox value={option.name} />}
      label={
        <Box display="flex" alignItems="center">
          <Typography fontSize={14}>{option.name}</Typography>
          {hasToolTip && (
            <Tooltip title={option.description} arrow placement="right">
              <IconButton size="small" color="primary" sx={{ ml: 1 }}>
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      }
    />
  );
};

export default AppCheckbox;
