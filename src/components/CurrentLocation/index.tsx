import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";
import Map from "../Map";

const CurrentLocation: FC<Props> = ({ location, isLoading }) => {
  return (
    <div className={styles.top}>
      <div className={styles.map}>
        <Map isLoading={isLoading} location={location} />
      </div>
      <div className={styles.information}>
        <Card>
          <></>
        </Card>
      </div>
    </div>
  );
};

export default CurrentLocation;
