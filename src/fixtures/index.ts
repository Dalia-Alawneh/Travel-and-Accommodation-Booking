import { hero1, hero2, hero3 } from "@travelia/assets";
import { Menu } from "@travelia/types";

export const menuItems: Menu = [
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

export const DRAWER_WIDTH = 240;

export const carouselItems = [
  {
    image: hero1,
    text: "Where the ocean meets serenity.",
  },
  {
    image: hero2,
    text: "Let the waves carry your worries away.",
  },
  {
    image: hero3,
    text: "More than a trip—it's a story.",
  },
];

export const thumbnails = [hero1, hero2, hero3];
