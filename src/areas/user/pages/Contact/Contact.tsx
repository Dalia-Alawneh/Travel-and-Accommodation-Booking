import { Box, Button } from "@mui/material";
import Main from "@travelia/components/MainSection";
import PageHero from "../../components/PageHero";
import AppForm from "@travelia/components/Form";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import { contactSchema } from "@travelia/schemas/conact";

type ContactFormValues = {
  user_email: string;
  message: string;
};

const initialValues: ContactFormValues = {
  user_email: "",
  message: "",
};

const Contact = () => {
  const handleSubmit = async (values: ContactFormValues) => {};

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

export default Contact;
