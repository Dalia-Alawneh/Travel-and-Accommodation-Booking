import { Divider } from "@mui/material";

interface IAppDividerProps {
  orientation?: "vertical" | "horizontal";
}

const AppDivider = ({ orientation = "vertical" }: IAppDividerProps) => {
  const isVertical = orientation === "vertical";

  return (
    <Divider
      orientation={orientation}
      flexItem
      sx={{
        display: { xs: "none", lg: "block" },
        height: isVertical ? "50px" : "1px",
        width: isVertical ? "1px" : "100%",
        my: isVertical ? 0 : 1,
      }}
    />
  );
};

export default AppDivider;
