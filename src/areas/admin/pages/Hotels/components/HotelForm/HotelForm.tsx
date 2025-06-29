import { Box, Typography } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppButton from "@travelia/components/Button";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import { hotelSchema } from "@travelia/schemas/hotel";
import useValidateImage from "@travelia/hooks/useValidateImage";

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
  showImage?: boolean;
}

const HotelForm = ({
  initialValues,
  onSubmit,
  isLoading,
  title,
  showImage = true,
}: HotelFormProps) => {
  console.log(initialValues);

  const { src } = useValidateImage(initialValues.imageUrl);
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

            {showImage && (
              <Box
                component="img"
                src={src}
                width={350}
                height={200}
                sx={{ objectFit: "cover", borderRadius: 0.4 }}
              />
            )}

            <FormikTextField
              name="imageUrl"
              label="Image URL"
              placeholder="Enter Image URL"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
            />

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
              name="availableRooms"
              label="Available Rooms"
              type="number"
              placeholder="Enter Available Rooms"
              value={formik.values.availableRooms}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="starRating"
              label="Star Rating"
              placeholder="Enter Star Rating"
              type="number"
              value={formik.values.starRating}
              onChange={formik.handleChange}
            />

            <AppButton
              sx={{ bgcolor: "primary.main", color: "white", px: 4, mt: 3 }}
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
