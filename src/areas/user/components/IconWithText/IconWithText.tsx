import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IconWithTextProps {
  icon: ReactNode;
  text: string;
}

const IconWithText = ({ icon, text }: IconWithTextProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1} my={1}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default IconWithText;
