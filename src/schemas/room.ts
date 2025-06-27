import * as Yup from "yup";

export const roomSchema = Yup.object().shape({
  roomNumber: Yup.number().required("Room Number is required"),
  price: Yup.number().required("Price is required"),
  roomType: Yup.string().required("Room Type is required"),
  capacityOfAdults: Yup.number().required("Capacity is required"),
  capacityOfChildren: Yup.number().required("Capacity is required"),
  roomPhotoUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Photo is required"),
  roomAmenities: Yup.mixed().required("Amenities are required"),
  availability: Yup.boolean().required("Availability is required"),
});
