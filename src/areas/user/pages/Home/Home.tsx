import { Box } from "@mui/material";
import TopBar from "../../../../components/TopBar";
import Header from "./components/Header";
import FeaturedDeals from "./components/FeaturedDeals/FeaturedDeals";
import { menuItems } from "@travelia/fixtures";
import TrendingDestinations from "./components/TrendingDestinations/TrendingDestinations";

const Home = () => {
  return (
    <div>
      <TopBar menuLinks={menuItems} />
      <Header />
      <Box py={3}></Box>
      <FeaturedDeals />
      <TrendingDestinations />
    </div>
  );
};

export default Home;
