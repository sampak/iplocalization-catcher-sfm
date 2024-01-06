import classNames from "classnames";
import styles from "./styles.module.scss";
import { FC, Props } from "./typings";

const Button: FC<Props> = ({ type = "button", disabled, text, onClick }) => {
  return (
    <button
      type={type}
      onClick={() => {
        onClick?.();
      }}
      className={classNames(styles.button, disabled && styles.disabled)}
    >
      {text}
    </button>
  );
};

export default Button;
