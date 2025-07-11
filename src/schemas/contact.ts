import * as Yup from "yup";

export const contactSchema = Yup.object({
  user_email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
