import { Remove, Add } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";

interface ICounterProps {
  label: string;
  value: number;
  onClick: (value: number) => void;
}
const Counter = ({ label, value, onClick }: ICounterProps) => (
  <Box display="flex" alignItems="center" justifyContent="space-between" py={1}>
    <Typography variant="caption">{label}</Typography>
    <Box display="flex" alignItems="center" gap={2}>
      <IconButton onClick={() => onClick(value - 1)} disabled={value <= 0}>
        <Remove sx={{ color: "custom.orange" }} fontSize="small" />
      </IconButton>
      <Typography variant="caption">{value}</Typography>
      <IconButton onClick={() => onClick(value + 1)}>
        <Add sx={{ color: "custom.orange" }} fontSize="small" />
      </IconButton>
    </Box>
  </Box>
);

export default Counter;
