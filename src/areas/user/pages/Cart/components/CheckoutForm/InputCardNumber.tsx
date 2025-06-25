import { useField } from "formik";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";

interface CardNumberInputProps {
  name: string;
}

const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .slice(0, 20)
    .trim();

const CardNumberInput = ({ name }: CardNumberInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    helpers.setValue(formatted);
  };

  return (
    <AppTextField
      {...field}
      value={field.value}
      onChange={handleChange}
      error={isError}
      helperText={isError ? meta.error : ""}
      fullWidth
      placeholder="1234 5678 9012 3456"
      label="Card Number"
    />
  );
};

export default CardNumberInput;
