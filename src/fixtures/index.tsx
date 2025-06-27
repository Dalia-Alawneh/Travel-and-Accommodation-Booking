import { hero1, hero2, hero3, thumb1, thumb2, thumb3 } from "@travelia/assets";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Menu, SelectItem, SortOptions } from "@travelia/types";

export const userMenuItems: Menu = [
  {
    title: "Home",
    path: "/user",
  },
  {
    title: "Search",
    path: "search",
  },
];

export const adminMenuItems: Menu = [
  {
    title: "Cities",
    path: "cities",
    icon: <LocationCityIcon />,
  },
  {
    title: "Hotels",
    path: "hotels",
    icon: <HotelIcon />,
  },
  {
    title: "Rooms",
    path: "rooms",
    icon: <MeetingRoomIcon />,
  },
];

export const carouselItems = [
  {
    src: hero1,
    title: "Explore the World",
    subtitle: "Let the waves carry your worries away.",
  },
  {
    src: hero2,
    title: "Luxury Hotels",
    subtitle: "Where the ocean meets serenity.",
  },
  {
    src: hero3,
    title: "Adventure Awaits",
    subtitle: "More than a trip—it's a story.",
  },
];

export const thumbnails = [thumb1, thumb2, thumb3];

export const sortOptions: SelectItem[] = [
  { text: "None", value: "" },
  { text: "Price: Low to High", value: SortOptions.PriceAsc },
  { text: "Price: High to Low", value: SortOptions.PriceDesc },
  { text: "Rating: High to Low", value: SortOptions.RatingDesc },
  { text: "Rating: Low to High", value: SortOptions.RatingAsc },
  { text: "Name: A to Z", value: SortOptions.NameAsc },
  { text: "Name: Z to A", value: SortOptions.NameDesc },
];
