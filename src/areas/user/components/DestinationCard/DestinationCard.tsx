import { LocationOn } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import useValidateImage from "@travelia/hooks/useValidateImage";

interface IDestinationCardProps {
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

const DestinationCard = ({
  cityName,
  countryName,
  description,
  thumbnailUrl,
}: IDestinationCardProps) => {
  const imageUrl = useValidateImage(thumbnailUrl);

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        height: "100%",
        alignItems: "stretch",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          sx={{ objectFit: "cover" }}
          image={imageUrl}
          alt="Paella dish"
        />
      </Box>
      <CardContent
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box mt={2} display="flex" justifyContent="space-between" gap={1}>
          <Box display="flex" alignItems="center" gap={1} mt={0.5}>
            <LocationOn sx={{ color: "text.disabled", fontSize: 18 }} />
            <Typography variant="h4" color="text.dark">
              {cityName}, {countryName}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ height: "100%" }}
          gap={1}
          mt={0.5}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          gap={{ xs: 2, sm: 0 }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
