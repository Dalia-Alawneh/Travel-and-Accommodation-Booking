import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  cardNumber: Yup.string()
    .transform((value) => value.replace(/\s/g, ""))
    .length(16, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string().required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});
