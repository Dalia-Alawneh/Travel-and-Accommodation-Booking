import { fallbackImage } from "@travelia/assets";
import { useEffect, useState } from "react";

const useValidateImage = (
  imageUrl: string,
  fallback: string = fallbackImage,
) => {
  const [src, setSrc] = useState(imageUrl);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (img.complete) {
        setSrc(imageUrl);
      } else {
        setSrc(fallback);
      }
    };
    img.onerror = () => {
      setSrc(fallback);
    };
  }, [imageUrl, fallback]);

  return src;
};

export default useValidateImage;
