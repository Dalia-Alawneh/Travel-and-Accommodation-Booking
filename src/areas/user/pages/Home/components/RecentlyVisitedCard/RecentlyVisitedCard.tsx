import { CalendarMonthRounded, Hotel, LocationOn } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import RatingBadge from "@travelia/areas/user/components/Badges/RatingBadge";
import AppSkeleton from "@travelia/areas/user/components/Skeleton";
import useValidateImage from "@travelia/hooks/useValidateImage";
import formatDateTime from "@travelia/utils/formatDateTime";
import { formatWithOptions } from "util";

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

const RecentlyVisitedCard = ({
  hotelId,
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
  return (
    <Card
      sx={{
        position: "relative",
        height: 350,
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .content": {
          opacity: 1,
        },
      }}
    >
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
          position: "absolute",
          inset: 0,
          bgcolor: "rgb(255 255 255 / 10%)",
          backdropFilter: "blur(10px)",
          opacity: 0,
          transform: "scale(1)",
          transition: "all 0.4s ease",
          px: 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight={700} mb={2}>
          {hotelName}
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <LocationOn sx={{ color: "text.primary" }} />
          <Typography variant="body2" fontWeight={600} color="text.primary">
            {cityName}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <CalendarMonthRounded sx={{ color: "text.primary" }} />
          <Typography variant="body2" fontWeight={600} color="text.primary">
            {date}
          </Typography>
        </Box>

        <Typography mt={2} fontSize={16} color="custom.orange" fontWeight={600}>
          {priceLowerBound} - {priceUpperBound} $
        </Typography>
      </Box>

      <RatingBadge
        starRating={starRating}
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          zIndex: 2,
          bgcolor: "white",
          borderRadius: "20px",
          px: 2,
          py: 0.5,
          boxShadow: 2,
        }}
      />
    </Card>
  );
};

export default RecentlyVisitedCard;
