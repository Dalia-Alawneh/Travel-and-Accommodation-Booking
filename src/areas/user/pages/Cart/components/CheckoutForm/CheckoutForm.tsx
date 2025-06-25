import { Box, Button } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import * as Yup from "yup";
import CardTypeSelector from "../CardTypeSelector";
import { useState } from "react";
import CardNumberInput from "./InputCardNumber";
import ExpiryDateInput from "./ExpiryDateInput";
import { useMutation } from "@tanstack/react-query";
import { submitBooking } from "@travelia/api/endpoints/booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "@travelia/Ducks/reducers";

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
    .transform((value) => value.replace(/\s/g, ""))
    .length(16, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string().required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});

const CheckoutForm = () => {
  const [cardType, setCardType] = useState<string>("visa");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: checkoutMutate, isPending: isCheckoutPending } = useMutation({
    mutationFn: submitBooking,
    onSuccess: (res) => {
      navigate("/order-confirmation", { state: { booking: res } });
      dispatch(clearCart());
      toast.success("Order submitted successfully!");
    },
    onError: () => {
      toast.error("Failed to submit your order, please try again.");
    },
  });

  return (
    <AppForm<CheckoutFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        checkoutMutate(values);
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
          <AppTextField
            name="fullName"
            label="Full Name"
            placeholder="Your Full Name"
          />
          <AppTextField name="email" placeholder="Your Email Address" />
          <CardTypeSelector value={cardType} onChange={setCardType} />
          <CardNumberInput name="cardNumber" />
          <ExpiryDateInput name="expiryDate" />
          <AppTextField name="cvv" placeholder="CVV" />

          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={isSubmitting}
            loading={isCheckoutPending}
          >
            Confirm Booking
          </Button>
        </Box>
      )}
    />
  );
};

export default CheckoutForm;
