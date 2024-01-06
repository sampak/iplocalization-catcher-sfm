import styles from "./styles.module.scss";
import { FC, Props } from "./typings";

const Button: FC<Props> = ({ type = "button", disabled, text, onClick }) => {
  return (
    <button
      type={type}
      onClick={() => {
        if (disabled) {
          return;
        }

        onClick?.();
      }}
      disabled={disabled}
      className={styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
