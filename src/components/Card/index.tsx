import { FC, Props } from "./typings";
import styles from "./styles.module.scss";

const Card: FC<Props> = ({ header, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
