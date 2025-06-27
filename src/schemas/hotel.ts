import * as Yup from "yup";

export const hotelSchema = Yup.object().shape({
  hotelName: Yup.string().required("Hotel Name is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required(),
  starRating: Yup.number().min(1).max(5).required("Star Rating is required"),
  availableRooms: Yup.number().required("Available Rooms is required"),
  imageUrl: Yup.string().url("Must be a valid URL").required(),
});
