import { Box, Typography } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppButton from "@travelia/components/Button";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import useValidateImage from "@travelia/hooks/useValidateImage";
import AppSwitch from "@travelia/components/Inputs/Switch";
import { roomSchema } from "@travelia/schemas/room";
import { IAmenity } from "@travelia/types";

interface RoomFormProps {
  initialValues: {
    roomNumber: number;
    price: number;
    roomType: string;
    capacityOfAdults: number;
    capacityOfChildren: number;
    roomPhotoUrl: string;
    roomAmenities: Omit<IAmenity, "id">[];
    availability: boolean;
  };
  onSubmit: (values: RoomFormProps["initialValues"]) => void;
  isLoading?: boolean;
  title: string;
  showImage?: boolean;
}

const RoomForm = ({
  initialValues,
  onSubmit,
  isLoading,
  title,
  showImage = true,
}: RoomFormProps) => {
  const { src } = useValidateImage(initialValues.roomPhotoUrl);

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={roomSchema}
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
              name="roomPhotoUrl"
              label="Image URL"
              placeholder="Enter Image URL"
              value={formik.values.roomPhotoUrl}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="roomNumber"
              label="Room Number"
              type="number"
              placeholder="Enter Room Number"
              value={formik.values.roomNumber}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="capacityOfAdults"
              label="Capacity Of Adults"
              type="number"
              placeholder="Enter Capacity Of Adults"
              value={formik.values.capacityOfAdults}
              onChange={formik.handleChange}
            />

            <FormikTextField
              name="capacityOfChildren"
              label="Capacity Of Children"
              type="number"
              placeholder="Enter Capacity Of Children"
              value={formik.values.capacityOfChildren}
              onChange={formik.handleChange}
            />

            <Box>
              <AppSwitch name="availability" label="Available" />
            </Box>
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

export default RoomForm;
