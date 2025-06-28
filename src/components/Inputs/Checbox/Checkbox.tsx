import { useFormikContext, FormikValues } from "formik";
import {
  Checkbox,
  FormControlLabel,
  Tooltip,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IOption {
  name: string;
  description?: string;
}

interface IAppCheckboxProps<T extends FormikValues> {
  option: IOption;
  fieldName: Extract<keyof T, string>;
  hasToolTip?: boolean;
}

const AppCheckbox = <T extends FormikValues>({
  option,
  fieldName,
  hasToolTip,
}: IAppCheckboxProps<T>) => {
  const { setFieldValue, values } = useFormikContext<T>();

  const fieldValues = (values[fieldName] ?? []) as string[];

  const handleChange = () => {
    const alreadyChecked = fieldValues.includes(option.name);

    const updatedValues = alreadyChecked
      ? fieldValues.filter((val) => val !== option.name)
      : [...fieldValues, option.name];

    setFieldValue(fieldName, updatedValues);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={fieldValues.includes(option.name)}
          onChange={handleChange}
        />
      }
      label={
        <Box display="flex" alignItems="center">
          <Typography fontSize={14}>{option.name}</Typography>
          {hasToolTip && option.description && (
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
