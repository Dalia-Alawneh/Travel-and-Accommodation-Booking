import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
