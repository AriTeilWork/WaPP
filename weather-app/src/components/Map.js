import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

const Map = ({ setCoords }) => {
  const map = useMapEvents({
    click(e) {
      setCoords(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    L.Control.geocoder({ geocoder }).addTo(map);
  }, [map]);

  return null;
};

const MyMap = ({ setCoords }) => {
  const [markerPosition, setMarkerPosition] = React.useState([51.505, -0.09]);

  const handleMapClick = (e) => {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
    setCoords({ lat: e.latlng.lat, lon: e.latlng.lng });
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '450px', width: '100%', borderRadius: '20px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Map setCoords={setCoords} />
      <Marker position={markerPosition} eventHandlers={{ click: handleMapClick }}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
