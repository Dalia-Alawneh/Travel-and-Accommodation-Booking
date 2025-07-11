import { Box, Button } from "@mui/material";
import { type FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";
import Main from "@travelia/components/MainSection";
import PageHero from "../../components/PageHero";
import AppForm from "@travelia/components/Form";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import toast from "react-hot-toast";
import { contactSchema } from "@travelia/schemas/conact";
import { emailPublicKey, emailServiceId, emailTemplateId } from "./config";

type ContactFormValues = {
  user_email: string;
  message: string;
};

const initialValues: ContactFormValues = {
  user_email: "",
  message: "",
};

const ContactPage = () => {
  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    const data = {
      from_name: values.user_email,
      from: values.user_email,
      message: values.message,
      to_name: "Dalia",
    };
    try {
      await emailjs.send(emailServiceId, emailTemplateId, data, emailPublicKey);
      resetForm();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <PageHero title="Contact Us" />
      <Main>
        <AppForm
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
          render={(formik) => (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              <FormikTextField
                name="user_email"
                label="Your Email"
                type="email"
              />
              <FormikTextField
                name="message"
                label="Message"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={formik.isSubmitting}
                sx={{ my: 4 }}
              >
                Send Message
              </Button>
            </Box>
          )}
        />
      </Main>
    </>
  );
};

export default ContactPage;
