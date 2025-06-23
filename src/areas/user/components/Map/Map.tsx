import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
interface IMapProps {
  lat: number;
  lng: number;
}
const Map = ({ lat, lng }: IMapProps) => {
  const position: [number, number] = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Exact Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
