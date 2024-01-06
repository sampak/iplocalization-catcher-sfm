import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";
import LocationCard from "../LocationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const LocationHistoryList: FC<Props> = ({ locationsHistory }) => {
  return (
    <Card
      header={
        <>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          Search history
        </>
      }
    >
      <div className={styles.wrapper}>
        {locationsHistory.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </Card>
  );
};

export default LocationHistoryList;
