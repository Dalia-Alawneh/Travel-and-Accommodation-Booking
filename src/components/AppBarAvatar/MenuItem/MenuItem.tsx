import { Box } from "@mui/material";
import { ReactNode } from "react";
interface IMenuItem {
  text: string;
  icon: ReactNode;
}
const MenuItemContent = ({ icon, text }: IMenuItem) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {icon} <span>{text}</span>
    </Box>
  );
};

export default MenuItemContent;
