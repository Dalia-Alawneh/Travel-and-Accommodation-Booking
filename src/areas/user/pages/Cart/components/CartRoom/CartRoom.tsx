import { DeleteRounded } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import Amenities from "@travelia/areas/user/components/Amenities";
import { removeFromCart } from "@travelia/Ducks/reducers";
import { IAvailableRoom } from "@travelia/types";
import { useDispatch } from "react-redux";

interface ICartRoomProps {
  room: Omit<IAvailableRoom, "availability">;
}

const CartRoom = ({ room }: ICartRoomProps) => {
  const dispatch = useDispatch();

  return (
    <Card
      key={room.roomId}
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 150 },
          height: { xs: 200, sm: "auto" },
          objectFit: "cover",
        }}
        image={room.roomPhotoUrl}
        alt={room.roomType}
      />
      <CardContent sx={{ flex: "1" }}>
        <Typography variant="h4" fontWeight={700}>
          {room.roomType} - Room {room.roomNumber}
        </Typography>

        <Typography variant="body2" my={1}>
          Adults Capacity: {room.capacityOfAdults}
        </Typography>
        <Typography variant="body2">
          Children Capacity: {room.capacityOfChildren}
        </Typography>
        <Typography variant="body2" color="primary" fontWeight={700} mt={1}>
          Price: ${room.price}
        </Typography>

        <Box mt={1}>
          <Typography variant="body2" fontWeight="bold">
            Amenities:
          </Typography>
          <Amenities amenities={room.roomAmenities} />
        </Box>

        <IconButton
          color="error"
          onClick={() => dispatch(removeFromCart(room.roomId))}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <DeleteRounded />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartRoom;
