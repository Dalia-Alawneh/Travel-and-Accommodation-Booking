import { Paper } from "@mui/material";
import SearchBar from "../../../../components/SearchBar";
import { useSearchNavigation } from "@travelia/hooks/useSearchNavigation";

const paperStyle = {
  bgcolor: "#fff",
  position: "absolute",
  left: "50%",
  bottom: { xs: -20, sm: -50, md: -20, xl: -60 },
  transform: "translateX(-50%)",
  width: { xs: "95%", sm: "90%", md: "80%", lg: "78%" },
  borderRadius: "12px",
  p: { xs: 2, sm: 3, md: 4, lg: 5 },
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
};

const HomeSearchBar = () => {
  const { onSearch } = useSearchNavigation("search");
  return (
    <Paper sx={paperStyle}>
      <SearchBar onSearch={onSearch} />
    </Paper>
  );
};

export default HomeSearchBar;
