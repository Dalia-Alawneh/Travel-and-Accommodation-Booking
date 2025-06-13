import { fallbackImage } from "@travelia/assets";
import { useEffect, useState } from "react";

const useValidateImage = (
  imageUrl: string,
  fallback: string = fallbackImage,
) => {
  const [src, setSrc] = useState(imageUrl);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (img.complete) {
        setIsLoading(false);
        setSrc(imageUrl);
      } else {
        setIsLoading(false);
        setSrc(fallback);
      }
    };
    img.onerror = () => {
      setIsLoading(false);
      setSrc(fallback);
    };
  }, [imageUrl, fallback]);

  return { isLoading, src };
};

export default useValidateImage;
