import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";
import Map from "../Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faMap } from "@fortawesome/free-solid-svg-icons";
import LocationInformation from "../LocationInformation";
import Loading from "../Loading";

const CurrentLocation: FC<Props> = ({ location, isLoading }) => {
  return (
    <div className={styles.top}>
      <div className={styles.map}>
        <Map
          header={
            <>
              <FontAwesomeIcon icon={faMap} /> Current location map
            </>
          }
          isLoading={isLoading}
          location={location}
        />
      </div>
      <div className={styles.information}>
        <Card
          header={
            <>
              <FontAwesomeIcon icon={faInfo} /> Current location information
            </>
          }
        >
          <>
            {isLoading && <Loading />}
            {location && <LocationInformation localization={location} />}
          </>
        </Card>
      </div>
    </div>
  );
};

export default CurrentLocation;
