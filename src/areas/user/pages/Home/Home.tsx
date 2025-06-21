import Header from "./components/Header";
import FeaturedDeals from "./components/FeaturedDeals/FeaturedDeals";
import TrendingDestinations from "./components/TrendingDestinations/TrendingDestinations";
import WrappedRecentlyVisited from "./components/RecentlyVisited";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedDeals />
      <WrappedRecentlyVisited />
      <TrendingDestinations />
    </div>
  );
};

export default Home;
