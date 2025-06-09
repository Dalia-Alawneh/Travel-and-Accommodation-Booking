import { Box } from "@mui/material";
import ImageCarousel from "../Carousel";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Box position="relative" mb={5}>
      <ImageCarousel />
      <SearchBar />
    </Box>
  );
};

export default Header;
