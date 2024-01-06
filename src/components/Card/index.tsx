import { FC, Props } from "./typings";
import styles from "./styles.module.scss";

const Card: FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
