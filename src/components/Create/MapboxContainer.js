import mapboxgl from "!mapbox-gl";
import React from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

export default function MapboxContainer(props) {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLng] = React.useState(-70.9);
  const [lat, setLat] = React.useState(42.35);
  const [zoom, setZoom] = React.useState(9);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: props.styleUrl,
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}