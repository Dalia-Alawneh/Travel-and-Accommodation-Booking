import { Box } from "@mui/material";
import ImageCarousel from "../Carousel";
import HomeSearchBar from "../HomeSearch/HomeSearchBar";

const Header = () => {
  return (
    <Box position="relative" mb={5}>
      <ImageCarousel />
      <HomeSearchBar />
    </Box>
  );
};

export default Header;
