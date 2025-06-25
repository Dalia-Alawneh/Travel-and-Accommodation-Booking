import { useField } from "formik";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";

interface ExpiryDateInputProps {
  name: string;
}

const formatExpiryDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/(\d{2})(\d{1,2})?/, (_, p1, p2) => (p2 ? `${p1}/${p2}` : p1));
};

const ExpiryDateInput = ({ name }: ExpiryDateInputProps) => {
  const [field, meta, helpers] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    helpers.setValue(formatted);
  };

  return (
    <AppTextField
      {...field}
      value={field.value}
      onChange={handleChange}
      error={isError}
      helperText={isError ? meta.error : ""}
      placeholder="MM/YY"
      fullWidth
      label="Expiry Date"
    />
  );
};

export default ExpiryDateInput;
