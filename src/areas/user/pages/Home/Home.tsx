import TopBar from "../../../../components/TopBar";
import Header from "./components/Header";
import FeaturedDeals from "./components/FeaturedDeals/FeaturedDeals";
import { menuItems } from "@travelia/fixtures";
import TrendingDestinations from "./components/TrendingDestinations/TrendingDestinations";
import Footer from "../../components/Footer";
import WrappedRecentlyVisited from "./components/RecentlyVisited";

const Home = () => {
  return (
    <div>
      <TopBar menuLinks={menuItems} />
      <Header />
      <FeaturedDeals />
      <WrappedRecentlyVisited />
      <TrendingDestinations />
      <Footer />
    </div>
  );
};

export default Home;
