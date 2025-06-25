import {
  InputLabel,
  SlotComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useField } from "formik";

type AppTextFieldProps = TextFieldProps & {
  name: string;
  slotProps?: {
    input?: SlotComponentProps<"input", object, object>;
    root?: SlotComponentProps<"div", object, object>;
  };
};

const textFieldStyle = {
  p: 0,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ddd",
    },
    "&:hover fieldset": {
      borderColor: "#bbb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "custom.skyBlue",
    },
    "& input:-webkit-autofill": {
      boxShadow: "0 0 0 1000px #fff inset",
      WebkitTextFillColor: "#000",
      borderRadius: "12px",
      transition: "background-color 5000s ease-in-out 0s",
    },
  },
};

const AppTextField = ({ name, slotProps, ...rest }: AppTextFieldProps) => {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <>
      <InputLabel
        sx={{
          fontSize: 13,
          color: "custom.darkSalver",
          ml: 2,
          textTransform: "capitalize",
        }}
      >
        {rest.label ?? name}
      </InputLabel>
      <TextField
        {...field}
        {...rest}
        error={isError}
        helperText={isError ? meta.error : ""}
        variant="outlined"
        fullWidth
        label={undefined}
        slotProps={{
          ...slotProps,
        }}
        sx={textFieldStyle}
      />
    </>
  );
};

export default AppTextField;
