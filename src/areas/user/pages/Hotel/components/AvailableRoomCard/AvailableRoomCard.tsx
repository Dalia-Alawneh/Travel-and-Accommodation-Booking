import { Bed, People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Amenities from "@travelia/areas/user/components/Amenities";
import AppButton from "@travelia/components/Button";
import { bookButtonStyle } from "@travelia/styles";
import theme from "@travelia/theme";
import { IAvailableRoom } from "@travelia/types";

interface IAvailableRoomCardProps {
  room: IAvailableRoom;
}

const availableBadgeSx = {
  position: "absolute",
  top: 10,
  left: 10,
  px: 1.5,
  py: 0.3,
  fontSize: 11,
  borderRadius: 1,
  boxShadow: "0px 0px 8px 0px #ceffd0",
};
const AvailableRoomCard = ({ room }: IAvailableRoomCardProps) => {
  return (
    <Box
      sx={{
        mb: 3,
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: theme.customShadows.light,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: "0 0 220px",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={room.roomPhotoUrl}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {room.availability && (
          <Box
            bgcolor="success.light"
            color="white"
            sx={availableBadgeSx}
            fontWeight={600}
          >
            Available
          </Box>
        )}
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} mb={0.5}>
            Room {room.roomNumber}
          </Typography>

          <Box display="flex" gap={1} alignItems="center" mb={0.5}>
            <People sx={{ color: "custom.orange", fontSize: 16 }} />
            <Typography variant="body2">
              Adults: {room.capacityOfAdults} | Children:{" "}
              {room.capacityOfChildren}
            </Typography>
          </Box>

          <Box display="flex" gap={1} alignItems="center" mb={1}>
            <Bed sx={{ color: "custom.orange", fontSize: 16 }} />
            <Typography variant="body2">{room.roomType}</Typography>
          </Box>

          <Typography variant="body2" color="primary" fontWeight={700}>
            ${room.price.toFixed(2)} / Night
          </Typography>

          {room.roomAmenities.length > 0 && (
            <Amenities amenities={room.roomAmenities} />
          )}
        </Box>

        <AppButton
          sx={{
            ...bookButtonStyle,
            bgcolor: "custom.beige",
            mt: 2,
            px: 3,
            width: "100%",
          }}
        >
          Book Now
        </AppButton>
      </Box>
    </Box>
  );
};

export default AvailableRoomCard;
