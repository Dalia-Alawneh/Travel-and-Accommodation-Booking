import { Box, Typography } from "@mui/material";
import Main from "../../components/MainSection";
import { successOrder } from "@travelia/assets";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.booking) {
      navigate("/user/cart");
    }
  }, [state, navigate]);

  if (!state?.booking) {
    return null;
  }

  return (
    <Main>
      <Box py={8} display="flex" flexDirection="column" alignItems="center">
        <Box component="img" src={successOrder} width={150} />
        <Typography>Thank you for placing order🎀</Typography>
      </Box>
    </Main>
  );
};

export default OrderPage;
