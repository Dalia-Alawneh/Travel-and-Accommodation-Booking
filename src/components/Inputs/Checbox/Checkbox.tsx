import { useFormikContext } from "formik";
import {
  Checkbox,
  FormControlLabel,
  Tooltip,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IAmenity } from "@travelia/types";

interface ICheckboxItem {
  option: IAmenity;
  hasToolTip?: boolean;
}

const AppCheckbox = ({ option, hasToolTip }: ICheckboxItem) => {
  const { setFieldValue, values } = useFormikContext<{ amenities: string[] }>();

  const handleChange = () => {
    const currentValues = values.amenities || [];
    const alreadyChecked = currentValues.includes(option.name);

    const updatedValues = alreadyChecked
      ? currentValues.filter((val) => val !== option.name)
      : [...currentValues, option.name];

    setFieldValue("amenities", updatedValues);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={values.amenities.includes(option.name)}
          onChange={handleChange}
        />
      }
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
