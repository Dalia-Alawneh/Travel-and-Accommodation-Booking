import { Box } from "@mui/material";
import TopBar from "../../../../components/TopBar";
import Header from "./components/Header";
import FeaturedDeals from "./components/FeaturedDeals/FeaturedDeals";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Box py={3}></Box>
      <FeaturedDeals />
    </div>
  );
};

export default Home;
