import { Box, Typography } from "@mui/material";
import { pageHeader } from "@travelia/assets";
import { overlaySx } from "@travelia/styles";

interface IPageHeroProps {
  title: string;
}

const headerSx = {
  height: "40vh",
  backgroundImage: `url(${pageHeader})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const PageHero = ({ title }: IPageHeroProps) => {
  return (
    <header>
      <Box sx={headerSx}>
        <Box
          sx={{ ...overlaySx, backdropFilter: "blur(1px)" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography
            variant="h1"
            color="white"
            fontWeight={400}
            textTransform="uppercase"
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </header>
  );
};

export default PageHero;
