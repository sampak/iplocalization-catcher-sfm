import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import Card from "../Card";

const LocationInformation: FC<Props> = ({ localization }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.label}>IP: </div>
        <div className={styles.data}>{localization.ip}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Continent name: </div>
        <div className={styles.data}>{localization.continent_name}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Country Name: </div>
        <div className={styles.data}>
          <img
            src={localization.location.country_flag}
            alt={`country flag ${localization.country_name}`}
          />
          {localization.country_name}
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Region: </div>
        <div className={styles.data}>{localization.region_name}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Zip Code: </div>
        <div className={styles.data}>{localization.zip}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Latitude: </div>
        <div className={styles.data}>{localization.latitude}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.label}>Longitude: </div>
        <div className={styles.data}>{localization.longitude}</div>
      </div>

      {/* <div className={styles.box}>
        <div className={styles.label}>IP: </div>
        <div className={styles.data}>8.8.8.8</div>
      </div> */}
    </div>
  );
};

export default LocationInformation;
