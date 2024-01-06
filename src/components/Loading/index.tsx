import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon className={styles.icon} icon={faSpinner} />
    </div>
  );
};

export default Loading;
