import { FC, Props } from "./typings";
import L from "leaflet";
import styles from "./styles.module.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Card from "../Card";
import Loading from "../Loading";
import { useEffect, useRef } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [35, 46],
  iconAnchor: [17, 46],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map: FC<Props> = ({ location, isLoading }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    mapRef?.current?.setView([location.latitude, location.longitude], 13);
  }, [location]);

  return (
    <Card>
      <>
        {isLoading && <Loading />}
        {!isLoading && (
          <MapContainer
            ref={mapRef}
            className={styles.map}
            center={[location.latitude, location.longitude]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </>
    </Card>
  );
};

export default Map;
