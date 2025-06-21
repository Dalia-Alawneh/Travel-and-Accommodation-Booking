import { Divider } from "@mui/material";
interface IAppDividerProps {
  orientation?: "vertical" | "horizontal";
}

const AppDivider = ({ orientation = "vertical" }: IAppDividerProps) => {
  return (
    <Divider
      orientation={orientation}
      flexItem
      sx={{
        display: { xs: "none", md: "block" },
        height: "50px",
        width: "1px",
      }}
    />
  );
};

export default AppDivider;
