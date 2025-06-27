import { hero1, hero2, hero3, thumb1, thumb2, thumb3 } from "@travelia/assets";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Menu, SelectItem, SortOptions } from "@travelia/types";

export const userMenuItems: Menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Contact",
    path: "contact",
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

export const DRAWER_WIDTH = 240;

export const carouselItems = [hero1, hero2, hero3];

export const thumbnails = [thumb1, thumb2, thumb3];

export const cities: SelectItem[] = [
  { value: "jenin", text: "Jenin, Palestine" },
  { value: "jerusalem", text: "Jerusalem" },
  { value: "cairo", text: "Cairo" },
  { value: "dubai", text: "Dubai" },
];

export const adults: SelectItem[] = [
  { value: 1, text: "1 Adult" },
  { value: 2, text: "2 Adults" },
  { value: 3, text: "3 Adults" },
  { value: 4, text: "4 Adults" },
  { value: 5, text: "5 Adults" },
];

export const children: SelectItem[] = [
  { value: 0, text: "0 Children" },
  { value: 1, text: "1 Child" },
  { value: 2, text: "2 Children" },
  { value: 3, text: "3 Children" },
  { value: 4, text: "4 Children" },
  { value: 5, text: "5 Children" },
];

export const TOKEN_KEY = "authentication";
export const USER = "user";

export const sortOptions: SelectItem[] = [
  { text: "None", value: "" },
  { text: "Price: Low to High", value: SortOptions.PriceAsc },
  { text: "Price: High to Low", value: SortOptions.PriceDesc },
  { text: "Rating: High to Low", value: SortOptions.RatingDesc },
  { text: "Rating: Low to High", value: SortOptions.RatingAsc },
  { text: "Name: A to Z", value: SortOptions.NameAsc },
  { text: "Name: Z to A", value: SortOptions.NameDesc },
];

export const PAGE_OPTIONS = [5, 10, 20];
export const PAGE_SIZE = 5;
