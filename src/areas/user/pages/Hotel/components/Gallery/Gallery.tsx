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
import type { IGalleryItem } from "@travelia/types";
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
        <Typography variant="h3">Gallery</Typography>

        {isGalleryLoading ? (
          <Skeleton variant="rectangular" height={300} />
        ) : gallery?.length ? (
          <ImageList variant="quilted" cols={4} rowHeight={121}>
            {gallery.map((image, index) => {
              const pairIndex = Math.floor(index / 2);
              const bigOnFirst = pairIndex % 2 === 0;
              const isBig =
                (index % 2 === 0 && bigOnFirst) ||
                (index % 2 === 1 && !bigOnFirst);

              const rows = isBig ? 2 : 1;
              const cols = isBig ? 2 : 1;

              return (
                <ImageListItem key={image.id} cols={cols} rows={rows}>
                  <img
                    src={`${image.url}?w=${121 * cols}&h=${121 * rows}&fit=crop&auto=format`}
                    srcSet={`${image.url}?w=${121 * cols}&h=${121 * rows}&fit=crop&auto=format&dpr=2 2x`}
                    alt={`Gallery image ${image.id}`}
                    loading="lazy"
                    style={{ cursor: "pointer", borderRadius: 10 }}
                    onClick={() => setShowImage(image.url)}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        ) : (
          <Typography variant="body2">No images available.</Typography>
        )}
      </Box>
    </>
  );
};

export default Gallery;
