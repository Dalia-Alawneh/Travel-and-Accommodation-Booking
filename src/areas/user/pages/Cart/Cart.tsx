import {
  selectCartCount,
  selectCartItems,
  selectTotalPrice,
} from "@travelia/Ducks/selectors/cart";
import PageHero from "../../components/PageHero";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import { clearCart, removeFromCart } from "@travelia/Ducks/actions";
import { emptyCart } from "@travelia/assets";
import CartRoom from "./components/CartRoom";
import Main from "../../../../components/MainSection";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";
import AppButton from "@travelia/components/Button";
import CheckoutForm from "./components/CheckoutForm";
import AppDivider from "@travelia/components/Divider/Divider";

const CartPage = () => {
  const cart = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openConfirmDeleteRoom, setOpenConfirmDeleteRoom] = useState(false);
  const [openConfirmDeleteCart, setOpenConfirmDeleteCart] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleDeleteRoom = (id: number) => {
    setSelectedRoomId(id);
    setOpenConfirmDeleteRoom(true);
  };

  const confirmDeleteRoom = () => {
    if (selectedRoomId !== null) {
      dispatch(removeFromCart(selectedRoomId));
    }
    setOpenConfirmDeleteRoom(false);
  };

  const confirmDeleteCart = () => {
    dispatch(clearCart());
    setOpenConfirmDeleteCart(false);
  };

  return (
    <>
      <PageHero title="Booking Cart" />
      <Main>
        {cartCount > 0 && (
          <Box display="flex" justifyContent="end" mb={2}>
            <AppButton
              sx={{ bgcolor: "custom.danger", color: "white", py: 1, px: 3 }}
              onClick={() => setOpenConfirmDeleteCart(true)}
            >
              Clear Cart
            </AppButton>
          </Box>
        )}

        {cart.length === 0 ? (
          <Box display="flex" flexDirection="column" alignItems="center" py={8}>
            <Box component="img" src={emptyCart} />
            <Typography
              variant="h6"
              textAlign="center"
              color="custom.darkSalver"
              py={8}
            >
              Your booking cart is empty.
            </Typography>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
            maxWidth="xl"
            mx="auto"
            py={4}
          >
            <Box flex={2}>
              {cart.map((room) => (
                <CartRoom
                  room={room}
                  key={room.roomId}
                  handleDelete={() => handleDeleteRoom(room.roomId)}
                />
              ))}
            </Box>

            <Box
              flex={1}
              boxShadow={theme.customShadows.light}
              p={2}
              borderRadius={1}
              minWidth={{ lg: "300px" }}
              height="fit-content"
            >
              <Typography variant="h6" mb={2}>
                Order Summary
              </Typography>
              <Typography>Rooms Count: {cart.length}</Typography>
              <Typography mt={1} fontWeight={700}>
                Total: ${total}
              </Typography>
              <AppDivider orientation="horizontal" />
              {!showCheckoutForm ? (
                <AppButton
                  sx={{ mt: 2, bgcolor: "primary", color: "white" }}
                  onClick={() => setShowCheckoutForm(true)}
                  fullWidth
                >
                  Go and Checkout
                </AppButton>
              ) : (
                <Box mt={2}>
                  <CheckoutForm />
                </Box>
              )}
            </Box>
          </Box>
        )}

        <ConfirmDeleteDialog
          open={openConfirmDeleteRoom}
          onConfirmDelete={confirmDeleteRoom}
          handleClose={() => setOpenConfirmDeleteRoom(false)}
        />
        <ConfirmDeleteDialog
          open={openConfirmDeleteCart}
          onConfirmDelete={confirmDeleteCart}
          handleClose={() => setOpenConfirmDeleteCart(false)}
          description="Are you sure you want to delete all cart? This action cannot be
            undone."
        />
      </Main>
    </>
  );
};

export default CartPage;
