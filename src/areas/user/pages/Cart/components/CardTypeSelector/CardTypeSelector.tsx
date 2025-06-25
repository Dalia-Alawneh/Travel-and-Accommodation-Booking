import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { CreditCard, Payment, AccountBalanceWallet } from "@mui/icons-material";
import { MouseEvent } from "react";

interface CardTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CardTypeSelector = ({ value, onChange }: CardTypeSelectorProps) => {
  const handleChange = (event: MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) onChange(newValue);
  };

  return (
    <Box>
      <Typography mb={1} variant="body2" fontWeight={600}>
        Select Payment Method
      </Typography>

      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="card type"
        sx={{ display: "flex" }}
      >
        <ToggleButton value="visa" sx={{ flex: 1 }}>
          <CreditCard sx={{ mr: 1 }} /> Visa
        </ToggleButton>

        <ToggleButton value="mastercard" sx={{ flex: 1 }}>
          <Payment sx={{ mr: 1 }} /> MasterCard
        </ToggleButton>

        <ToggleButton value="paypal" sx={{ flex: 1 }}>
          <AccountBalanceWallet sx={{ mr: 1 }} /> PayPal
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default CardTypeSelector;
