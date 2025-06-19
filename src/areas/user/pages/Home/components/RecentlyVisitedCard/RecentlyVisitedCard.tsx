import { CalendarMonthRounded, LocationOn } from "@mui/icons-material";
import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import RatingBadge from "@travelia/areas/user/components/Badges/RatingBadge";
import AppSkeleton from "@travelia/areas/user/components/Skeleton";
import useValidateImage from "@travelia/hooks/useValidateImage";
import formatDateTime from "@travelia/utils/formatDateTime";
import getContrastTextColor from "@travelia/utils/getContrastTextColor";

interface IRecentlyVisitedProps {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}

const cardStyleSx = {
  position: "relative",
  height: 350,
  borderRadius: 2,
  overflow: "hidden",
  cursor: "pointer",
  "&:hover .content": {
    opacity: 1,
  },
};

const cardContentStyleSx = {
  position: "absolute",
  inset: 0,
  backdropFilter: "blur(10px)",
  opacity: 0,
  transition: "all 0.4s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const RecentlyVisitedCard = ({
  cityName,
  hotelName,
  priceLowerBound,
  priceUpperBound,
  starRating,
  thumbnailUrl,
  visitDate,
}: IRecentlyVisitedProps) => {
  const { isLoading, src: imageUrl } = useValidateImage(thumbnailUrl);
  const date = formatDateTime(visitDate);
  const theme = useTheme();
  const overlayColor = theme.palette.custom.overlay;
  const textColorSx = { color: getContrastTextColor(theme, overlayColor) };
  return (
    <Card sx={cardStyleSx}>
      {isLoading ? (
        <AppSkeleton />
      ) : (
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
          image={imageUrl}
          alt={hotelName}
        />
      )}

      <Box
        className="content"
        sx={{
          ...cardContentStyleSx,
          bgcolor: overlayColor,
        }}
      >
        <Typography variant="h6" fontWeight={700} mb={2}>
          {hotelName}
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <LocationOn sx={textColorSx} />
          <Typography variant="body2" fontWeight={600} sx={textColorSx}>
            {cityName}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <CalendarMonthRounded sx={textColorSx} />
          <Typography variant="body2" fontWeight={600} sx={textColorSx}>
            {date}
          </Typography>
        </Box>

        <Typography mt={2} fontSize={16} color="custom.orange" fontWeight={700}>
          {priceLowerBound} $ - {priceUpperBound} $
        </Typography>
      </Box>

      <RatingBadge
        starRating={starRating}
        sx={{
          top: 15,
          right: 15,
          zIndex: 2,
          boxShadow: 4,
        }}
      />
    </Card>
  );
};

export default RecentlyVisitedCard;
