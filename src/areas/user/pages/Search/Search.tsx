import { Box, Typography } from "@mui/material";
import { pageHeader } from "@travelia/assets";
import { overlaySx } from "@travelia/styles";

const headerSx = {
  height: "40vh",
  backgroundImage: `url(${pageHeader})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
};
const SearchPage = () => {
  return (
    <>
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
              Search
            </Typography>
          </Box>
        </Box>
      </header>
    </>
  );
};

export default SearchPage;
