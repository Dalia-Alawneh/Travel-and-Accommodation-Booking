import * as React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import "mapbox-gl/dist/mapbox-gl.css";
interface IMapProps {
  lat: number;
  lng: number;
}

const AppMap = ({ lat, lng }: IMapProps) => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZGFsaWFzc3MiLCJhIjoiY21jYzg2NjZuMDQ5eTJscXp5dm9zb3VjZCJ9.NtLpIT3XqyyazbNc9tUc6g"
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 14,
      }}
      style={{ width: "100%", height: 320, borderRadius: 12 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker latitude={lat} longitude={lng} />
    </Map>
  );
};

export default AppMap;
