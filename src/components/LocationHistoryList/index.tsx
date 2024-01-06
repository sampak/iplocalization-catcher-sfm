import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";
import LocationCard from "../LocationCard";

const LocationHistoryList: FC<Props> = ({ locationsHistory }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        {locationsHistory.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </Card>
  );
};

export default LocationHistoryList;
