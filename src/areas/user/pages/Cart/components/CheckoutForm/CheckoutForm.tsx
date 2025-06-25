import { Box, Button } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import * as Yup from "yup";
import CardTypeSelector from "../CardTypeSelector";
import { useState } from "react";

interface CheckoutFormValues {
  fullName: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const initialValues: CheckoutFormValues = {
  fullName: "",
  email: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string().required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});

const CheckoutForm = () => {
  const [cardType, setCardType] = useState<string>("visa");

  return (
    <AppForm<CheckoutFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
      render={({ handleSubmit, isSubmitting }) => (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
          mt={2}
        >
          <AppTextField name="fullName" placeholder="Your Full Name" />
          <AppTextField name="email" placeholder="Your Email Address" />
          <CardTypeSelector value={cardType} onChange={setCardType} />
          <AppTextField name="cardNumber" placeholder="Card Number" />
          <AppTextField name="expiryDate" placeholder="MM/YY" />
          <AppTextField name="cvv" placeholder="CVV" />

          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={isSubmitting}
          >
            Confirm Booking
          </Button>
        </Box>
      )}
    />
  );
};

export default CheckoutForm;
