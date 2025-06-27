import * as Yup from "yup";

export const hotelSchema = Yup.object().shape({
  hotelName: Yup.string().required("Hotel Name is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string(),
  starRating: Yup.number().min(1).max(5),
  imageUrl: Yup.string().url("Must be a valid URL"),
});
