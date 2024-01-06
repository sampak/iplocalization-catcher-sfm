import { FC, Props } from "./typings";
import styles from "./styles.module.scss";

const LocationCard: FC<Props> = ({ location }) => {
  return <div className={styles.location}>{location.searchValue}</div>;
};

export default LocationCard;
