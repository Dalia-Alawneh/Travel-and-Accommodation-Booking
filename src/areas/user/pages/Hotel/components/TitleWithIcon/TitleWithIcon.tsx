import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface TitleWithIconProps {
  icon: ReactNode;
  text: string;
}

const TitleWithIcon = ({ icon, text }: TitleWithIconProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1} my={1}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default TitleWithIcon;
