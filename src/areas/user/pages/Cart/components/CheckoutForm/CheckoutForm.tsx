import { Box, Button } from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppTextFieldFormik from "@travelia/components/Inputs/TextField/TextField";
import CardTypeSelector from "../CardTypeSelector";
import { useState } from "react";
import CardNumberInput from "./InputCardNumber";
import ExpiryDateInput from "./ExpiryDateInput";
import { useMutation } from "@tanstack/react-query";
import { submitBooking } from "@travelia/api/endpoints/booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@travelia/Ducks/reducers";
import {
  selectCartItems,
  selectTotalPrice,
} from "@travelia/Ducks/selectors/cart";
import { checkoutSchema } from "@travelia/schemas/checkout";

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

const CheckoutForm = () => {
  const [cardType, setCardType] = useState<string>("visa");
  const cart = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: checkoutMutate, isPending: isCheckoutPending } = useMutation({
    mutationFn: submitBooking,
    onSuccess: (res) => {
      navigate("/user/order", { state: { booking: res } });
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
      validationSchema={checkoutSchema}
      onSubmit={(values) => {
        if (cart.length === 0) {
          toast.error("Your cart is empty!");
          return;
        }

        const payload = {
          customerName: values.fullName,
          paymentMethod: cardType,
          bookingDateTime: new Date().toISOString(),
          totalCost: totalCost,
          rooms: cart.map((room) => ({
            roomNumber: room.roomNumber,
            roomType: room.roomType,
          })),
        };

        checkoutMutate(payload);
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
          <AppTextFieldFormik
            name="fullName"
            label="Full Name"
            placeholder="Your Full Name"
          />
          <AppTextFieldFormik name="email" placeholder="Your Email Address" />
          <CardTypeSelector value={cardType} onChange={setCardType} />
          <CardNumberInput name="cardNumber" />
          <ExpiryDateInput name="expiryDate" />
          <AppTextFieldFormik name="cvv" placeholder="CVV" />

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
