import * as React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import { Warning } from "@mui/icons-material";

interface IMapProps {
  lat: number;
  lng: number;
}

const mapFallbackSx = {
  width: "100%",
  height: "100%",
  borderRadius: 12,
  backgroundColor: "#eee",
  display: "flex",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
};
const AppMap = ({ lat, lng }: IMapProps) => {
  const [mapError, setMapError] = React.useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: 320,
        borderRadius: 12,
        position: "relative",
      }}
    >
      {!mapError ? (
        <Map
          mapboxAccessToken="pk.eyJ1IjoiZGFsaWFzc3MiLCJhIjoiY21jYzg2NjZuMDQ5eTJscXp5dm9zb3VjZCJ9.NtLpIT3XqyyazbNc9tUc6g"
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%", borderRadius: 12 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onError={() => setMapError(true)}
        >
          <Marker latitude={lat} longitude={lng} />
        </Map>
      ) : (
        <Box style={mapFallbackSx}>
          <Warning fontSize="small" color="warning" /> Error loading map
        </Box>
      )}
    </div>
  );
};

export default AppMap;
