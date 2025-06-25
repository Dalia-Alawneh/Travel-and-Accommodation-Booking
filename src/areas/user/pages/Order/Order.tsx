import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import Main from "../../components/MainSection";
import { successOrder } from "@travelia/assets";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import AppButton from "@travelia/components/Button";
import formatDateTime from "@travelia/utils/formatDateTime";

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    if (!state?.booking) {
      navigate("/user/cart");
    }
  }, [state, navigate]);

  if (!state?.booking) {
    return null;
  }

  const {
    customerName,
    hotelName,
    roomNumber,
    roomType,
    bookingDateTime,
    totalCost,
    paymentMethod,
    bookingStatus,
    confirmationNumber,
  } = state.booking;

  const date = formatDateTime(bookingDateTime);
  return (
    <Main>
      <Box py={6} display="flex" flexDirection="column" alignItems="center">
        <Box component="img" src={successOrder} width={150} mb={2} />
        <Typography variant="h5" mb={4}>
          Thank you for placing order 🎀
        </Typography>

        <Box
          width="100%"
          maxWidth="800px"
          p={3}
          boxShadow={theme.customShadows.light}
          borderRadius={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" fontWeight={700} mb={2}>
              Order Details
            </Typography>

            <Box
              bgcolor="success.main"
              px={2}
              py={0.4}
              width="fit-content"
              fontSize={12}
              borderRadius={1}
              color="white"
            >
              <strong>{bookingStatus}</strong>
            </Box>
          </Box>
          <Typography variant="h5" fontWeight={700}>
            {customerName} Order
          </Typography>
          <Typography variant="caption">#{confirmationNumber}</Typography>

          <Table sx={{ mt: 4, bgcolor: "custom.salver" }}>
            <TableHead>
              <TableRow>
                <TableCell>Room No.</TableCell>
                <TableCell>Room Type</TableCell>
                <TableCell>Hotel Name</TableCell>
                <TableCell>Booking Date</TableCell>
                <TableCell>Payment Method</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{roomNumber}</TableCell>
                <TableCell>{roomType}</TableCell>
                <TableCell>{hotelName}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{paymentMethod}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography mt={4} variant="body2">
            Subtotal: <strong>${totalCost}</strong>
          </Typography>

          <Typography mt={1} variant="body2" fontWeight="bold">
            Total: ${totalCost}
          </Typography>

          <AppButton
            sx={{ mt: 3 }}
            variant="outlined"
            startIcon={
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                width={20}
              />
            }
          >
            Download Order Details PDF
          </AppButton>
        </Box>
      </Box>
    </Main>
  );
};

export default OrderPage;
