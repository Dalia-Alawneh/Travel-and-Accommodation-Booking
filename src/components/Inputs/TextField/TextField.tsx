import { SlotComponentProps, TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

type AppTextFieldProps = TextFieldProps & {
  name: string;
  slotProps?: {
    input?: SlotComponentProps<"input", object, object>;
    root?: SlotComponentProps<"div", object, object>;
  };
};

const AppTextField = ({ name, slotProps, ...rest }: AppTextFieldProps) => {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
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
      sx={{
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
        },
      }}
    />
  );
};

export default AppTextField;
