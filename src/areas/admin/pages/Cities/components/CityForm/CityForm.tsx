import { Box, Typography } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppButton from "@travelia/components/Button";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import { citySchema } from "@travelia/schemas/city";

interface CityFormProps {
  initialValues: { name: string; description: string };
  onSubmit: (values: { name: string; description: string }) => void;
  isLoading?: boolean;
  title: string;
}

const CityForm = ({
  initialValues,
  onSubmit,
  isLoading,
  title,
}: CityFormProps) => {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={citySchema}
      onSubmit={onSubmit}
      render={(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Box
            width={400}
            p={3}
            mt={10}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h4" mb={2} fontWeight={600}>
              {title}
            </Typography>

            <FormikTextField
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="description"
              label="Description"
              value={formik.values.description}
              multiline
              onChange={formik.handleChange}
              minRows={5}
            />

            <AppButton
              sx={{ bgcolor: "primary.main", color: "white", px: 4, mt: 6 }}
              fullWidth
              type="submit"
              loading={formik.isSubmitting || isLoading}
            >
              Save
            </AppButton>
          </Box>
        </form>
      )}
    />
  );
};

export default CityForm;
