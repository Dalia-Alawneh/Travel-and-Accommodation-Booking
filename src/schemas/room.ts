import * as Yup from "yup";

export const roomSchema = Yup.object().shape({
  roomNumber: Yup.number()
    .required("Room Number is required")
    .min(1, "Room number must be at least 1"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price cannot be negative"),
  roomType: Yup.string().required("Room Type is required"),
  capacityOfAdults: Yup.number()
    .required("Capacity of Adults is required")
    .min(0, "Number of adults cannot be negative"),
  capacityOfChildren: Yup.number()
    .required("Capacity of Children is required")
    .min(0, "Number of children cannot be negative"),
  roomPhotoUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Photo is required"),
  roomAmenities: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Amenity name is required"),
        description: Yup.string().required("Amenity description is required"),
      }),
    )
    .required("Room amenities are required"),
  availability: Yup.boolean().required("Availability is required"),
});
