import {
  selectCartItems,
  selectTotalPrice,
} from "@travelia/Ducks/selectors/cart";
import PageHero from "../../components/PageHero";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { clearCart } from "@travelia/Ducks/actions";
import { emptyCart } from "@travelia/assets";
import CartRoom from "./components/CartRoom";
import Main from "../../components/MainSection";

const CartPage = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

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
                <CartRoom room={room} key={room.roomId} />
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
      </Main>
    </>
  );
};

export default CartPage;
