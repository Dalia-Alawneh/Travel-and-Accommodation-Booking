import {
  InputLabel,
  SlotComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

type AppTextFieldProps = TextFieldProps & {
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

const AppTextField = ({ slotProps, ...rest }: AppTextFieldProps) => {
  return (
    <>
      <InputLabel
        sx={{
          fontSize: 13,
          color: "custom.darkSalver",
          textTransform: "capitalize",
        }}
      >
        {rest.label}
      </InputLabel>
      <TextField
        {...rest}
        variant="outlined"
        fullWidth
        label={undefined}
        slotProps={slotProps}
        sx={textFieldStyle}
      />
    </>
  );
};

export default AppTextField;
