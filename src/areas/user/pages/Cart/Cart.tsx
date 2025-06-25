import {
  selectCartItems,
  selectTotalPrice,
} from "@travelia/Ducks/selectors/cart";
import PageHero from "../../components/PageHero";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { clearCart, removeFromCart } from "@travelia/Ducks/actions";
import { emptyCart } from "@travelia/assets";
import CartRoom from "./components/CartRoom";
import Main from "../../components/MainSection";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";

const CartPage = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setSelectedRoomId(id);
    setOpenConfirmDelete(true);
  };
  const confirmDelete = () => {
    if (selectedRoomId !== null) {
      dispatch(removeFromCart(selectedRoomId));
    }
    setOpenConfirmDelete(false);
  };

  return (
    <>
      <PageHero title="Booking Cart" />
      <Main>
        <Box py={4} maxWidth="md" mx="auto">
          {cart.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center">
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
            <>
              {cart.map((room) => (
                <CartRoom
                  room={room}
                  key={room.roomId}
                  handleDelete={() => handleDelete(room.roomId)}
                />
              ))}

              <Box mt={4} textAlign="right">
                <Typography variant="h6">Total: ${total}</Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => dispatch(clearCart())}
                  sx={{ mt: 2 }}
                >
                  Clear Cart
                </Button>
              </Box>
            </>
          )}
        </Box>
        <ConfirmDeleteDialog
          open={openConfirmDelete}
          onConfirmDelete={confirmDelete}
          handleClose={() => setOpenConfirmDelete(false)}
        />
      </Main>
    </>
  );
};

export default CartPage;
