import { Box } from "@mui/material";
import TopBar from "../../../../components/TopBar";
import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Box py={3}></Box>
    </div>
  );
};

export default Home;
