import { Box, Typography } from "@mui/material";
import { pageHeader } from "@travelia/assets";
import { overlaySx } from "@travelia/styles";

interface IPageHeroProps {
  title: string;
  img?: string;
}

const headerSx = {
  height: "40vh",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  mt: 7,
};

const PageHero = ({ title, img }: IPageHeroProps) => {
  return (
    <header>
      <Box
        sx={{
          ...headerSx,
          backgroundImage: `url(${img ?? pageHeader})`,
        }}
      >
        <Box
          sx={{
            ...overlaySx,
            backdropFilter: "blur(1px)",
          }}
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
