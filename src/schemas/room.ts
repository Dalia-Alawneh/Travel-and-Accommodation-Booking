import * as Yup from "yup";

export const roomSchema = Yup.object().shape({
  roomNumber: Yup.number().required("Room Number is required"),
  price: Yup.number().required("Price is required"),
  roomType: Yup.string().required("Room Type is required"),
  capacityOfAdults: Yup.number().required("Capacity of Adults is required"),
  capacityOfChildren: Yup.number().required("Capacity of Children is required"),
  roomPhotoUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Photo is required"),
  roomAmenities: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        description: Yup.string().required("Description is required"),
      }),
    )
    .required("Amenities are required"),
  availability: Yup.boolean().required("Availability is required"),
});
