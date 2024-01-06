import { FC, Props } from "./typings";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useState } from "react";
import classNames from "classnames";
import { isIPAddress } from "../../utils/isIPAddress";
import { isURLAddress } from "../../utils/isURLAddress";

const SearchInput: FC<Props> = ({ value, setValue, isLoading }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={classNames(styles.wrapper, active && styles.active)}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      <input
        placeholder="Type IP address or url link"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <div className={styles.buttonWrapper}>
        <Button
          type="submit"
          disabled={isLoading || !(isIPAddress(value) || isURLAddress(value))}
          text="Szukaj"
        />
      </div>
    </div>
  );
};

export default SearchInput;
