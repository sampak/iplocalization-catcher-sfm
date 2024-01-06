import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";
import Map from "../Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faMap } from "@fortawesome/free-solid-svg-icons";
import LocationInformation from "../LocationInformation";

const HistoryLocation: FC<Props> = ({ location, isLoading }) => {
  return (
    <div className={styles.top}>
      <div className={styles.map}>
        {location ? (
          <Map
            header={
              <>
                <FontAwesomeIcon icon={faMap} /> Last location map
              </>
            }
            isLoading={isLoading}
            location={location}
          />
        ) : (
          <Card header={<>Last location map</>}>
            <div className={styles.wrapper}>History is empty</div>
          </Card>
        )}
      </div>
      <div className={styles.information}>
        {location ? (
          <Card
            header={
              <>
                <FontAwesomeIcon icon={faInfo} /> Last search information
              </>
            }
          >
            <LocationInformation localization={location!} />
          </Card>
        ) : (
          <Card header={<>Last location map</>}>
            <div className={styles.wrapper}>History is empty</div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HistoryLocation;
