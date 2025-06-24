import { useState } from "react";
import { Collapse, Box, Typography } from "@mui/material";
import { Bed, People, ExpandMore, CheckCircle } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import { bookButtonStyle } from "@travelia/styles";
import theme from "@travelia/theme";
import { IAvailableRoom } from "@travelia/types";
import { styled } from "@mui/material/styles";

interface IAvailableRoomCardProps {
  room: IAvailableRoom;
}

interface ExpandIconProps {
  expand: boolean;
}

const ExpandIcon = styled(ExpandMore, {
  shouldForwardProp: (prop) => prop !== "expand",
})<ExpandIconProps>(({ theme, expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  marginLeft: "auto",
}));

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

const cardSx = {
  mb: 3,
  height: "100%",
  borderRadius: 1,
  overflow: "hidden",
  boxShadow: theme.customShadows.light,
  display: "flex",
  flexDirection: "column",
};

const AvailableRoomCard = ({ room }: IAvailableRoomCardProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box sx={cardSx}>
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          mb={1}
        >
          <Typography variant="h4" fontWeight={700}>
            Room {room.roomNumber}
          </Typography>
          <ExpandIcon
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            sx={{ cursor: "pointer" }}
          />
        </Box>

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

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mt={2}>
            {room?.roomAmenities.map((amenity) => (
              <Box
                key={amenity.name}
                px={1}
                color="text-secondary"
                py={0.2}
                sx={{ fontSize: 11, borderRadius: 999 }}
              >
                <Box fontSize={12} fontWeight={700}>
                  <CheckCircle color="success" sx={{ fontSize: 12 }} />{" "}
                  {amenity.name}
                </Box>
                <Typography variant="caption" color="text.secondary" mb={1}>
                  {amenity.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Collapse>

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
