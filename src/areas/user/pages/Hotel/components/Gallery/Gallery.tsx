import {
  Box,
  Typography,
  Skeleton,
  ImageList,
  ImageListItem,
  Theme,
  SxProps,
} from "@mui/material";
import { hotelBoxSx, overlaySx } from "@travelia/styles";
import theme from "@travelia/theme";
import { IGalleryItem } from "@travelia/types";
import { useState } from "react";

interface IGalleryProps {
  isGalleryLoading: boolean;
  gallery: IGalleryItem[];
}

const galleryOverlaySx: SxProps<Theme> = {
  ...overlaySx,
  position: "fixed",
  zIndex: 99999,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const Gallery = ({ gallery, isGalleryLoading }: IGalleryProps) => {
  const [showImage, setShowImage] = useState<string | null>(null);

  return (
    <>
      {showImage && (
        <Box sx={galleryOverlaySx} onClick={() => setShowImage(null)}>
          <Box
            onClick={(e) => e.stopPropagation()}
            component="img"
            src={showImage}
            alt="Full screen"
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: 1,
              boxShadow: theme.customShadows.heavy,
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          ...hotelBoxSx,
          boxShadow: theme.customShadows.light,
        }}
      >
        <Typography variant="h3" fontWeight={600} mb={2}>
          Gallery
        </Typography>

        {isGalleryLoading ? (
          <Skeleton variant="rectangular" height={300} />
        ) : gallery?.length ? (
          <ImageList cols={3} gap={8}>
            {gallery.map((image) => (
              <ImageListItem key={image.id}>
                <img
                  src={image.url}
                  alt={`Gallery image ${image.id}`}
                  style={{ width: "100%", borderRadius: 8, cursor: "pointer" }}
                  onClick={() => setShowImage(image.url)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Typography variant="body2">No images available.</Typography>
        )}
      </Box>
    </>
  );
};

export default Gallery;
