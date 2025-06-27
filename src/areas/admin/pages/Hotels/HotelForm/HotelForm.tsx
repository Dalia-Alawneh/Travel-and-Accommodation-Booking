import { Box, Typography } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppButton from "@travelia/components/Button";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import { hotelSchema } from "@travelia/schemas/hotel";

interface HotelFormProps {
  initialValues: {
    hotelName: string;
    location: string;
    description: string;
    starRating: number;
    imageUrl: string;
    availableRooms: number;
  };
  onSubmit: (values: HotelFormProps["initialValues"]) => void;
  isLoading?: boolean;
  title: string;
}

const HotelForm = ({
  initialValues,
  onSubmit,
  isLoading,
  title,
}: HotelFormProps) => {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={hotelSchema}
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
              name="hotelName"
              label="Hotel Name"
              placeholder="Enter Hotel Name"
              value={formik.values.hotelName}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="location"
              label="Location"
              placeholder="Enter Location"
              value={formik.values.location}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="description"
              label="Description"
              placeholder="Enter Description"
              value={formik.values.description}
              multiline
              onChange={formik.handleChange}
              minRows={3}
            />

            <FormikTextField
              name="starRating"
              label="Star Rating"
              placeholder="Enter Star Rating"
              type="number"
              value={formik.values.starRating}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="imageUrl"
              label="Image URL"
              placeholder="Enter Image URL"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
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

export default HotelForm;
