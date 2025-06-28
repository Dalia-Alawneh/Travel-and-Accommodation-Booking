import { Search } from "@mui/icons-material";
import {
  Rating,
  FormGroup,
  Box,
  InputLabel,
  Typography,
  Slider,
} from "@mui/material";
import AppButton from "@travelia/components/Button";
import AppForm from "@travelia/components/Form";
import AppCheckbox from "@travelia/components/Inputs/Checbox";
import { HotelFilterValues, IAmenity } from "@travelia/types";

const HotelFilterForm = ({
  onSubmit,
  initialValues,
  amenities,
}: {
  onSubmit: (values: HotelFilterValues) => void;
  initialValues: HotelFilterValues;
  amenities: IAmenity[];
}) => {
  return (
    <AppForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems="center"
              >
                <InputLabel sx={{ fontWeight: 600, fontSize: 14 }}>
                  Budget per night
                </InputLabel>
                <Typography
                  variant="body2"
                  mt={1}
                  fontWeight={700}
                  color="custom.orange"
                >
                  {formik.values.budget}$
                </Typography>
              </Box>
              <Slider
                getAriaLabel={() => "Budget"}
                value={formik.values.budget}
                onChange={(_, value) => formik.setFieldValue("budget", value)}
                valueLabelDisplay="auto"
                min={0}
                max={500}
              />
            </Box>
            <Box>
              <InputLabel sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>
                Amenities
              </InputLabel>
              <FormGroup>
                {amenities.map((amenity) => (
                  <AppCheckbox
                    fieldName="Amenities"
                    key={amenity.name}
                    hasToolTip={true}
                    option={amenity}
                  />
                ))}
              </FormGroup>
            </Box>
            <Box>
              <InputLabel sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>
                Star rating
              </InputLabel>
              <Rating
                value={formik.values.starRate}
                onChange={(_, value) => formik.setFieldValue("starRate", value)}
              />
            </Box>
            <AppButton
              sx={{
                bgcolor: "#000",
                color: "#fff",
                mt: 4,
                px: "30px",
                width: "100%",
              }}
              type="submit"
            >
              <Search sx={{ fontSize: 20, color: "#ddd" }} /> Search
            </AppButton>
          </Box>
        </form>
      )}
    />
  );
};

export default HotelFilterForm;
