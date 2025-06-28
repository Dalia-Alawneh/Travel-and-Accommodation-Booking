import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface IChartWrapperProps {
  title: string;
  children: ReactNode;
}
const ChartWrapper = ({ title, children }: IChartWrapperProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 2,
        boxShadow: theme.customShadows.light,
        height: "100%",
        borderRadius: 1,
      }}
    >
      <Typography variant="h4" sx={{ pl: 1, fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default ChartWrapper;
