import { Paper } from "@mui/material";
import SearchBar from "../../../../components/SearchBar";
import { useNavigate } from "react-router";
import { UrlSearchParams } from "@travelia/types";

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
  const navigate = useNavigate();
  const onSearch = (params: UrlSearchParams) => {
    const queryParams = new URLSearchParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      city: params.city || "",
      adults: String(params.adults),
      children: String(params.children),
      rooms: String(params.rooms),
    });
    console.log(params);

    navigate(`search?${queryParams.toString()}`);
  };
  return (
    <Paper sx={paperStyle}>
      <SearchBar onSearch={onSearch} />
    </Paper>
  );
};

export default HomeSearchBar;
