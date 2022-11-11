import { Button } from "../../Button/Button.jsx";
import styles from "./OrderDelete.module.css";
import { func } from "prop-types";

OrderDelete.propTypes = {
  dropdownVisibilityHandler: func,
  removeHandler: func,
};

let noop = () => {};

export function OrderDelete({
  dropdownVisibilityHandler = noop,
  removeHandler = noop,
}) {
  return (
    <div className={styles._}>
      <span className={styles.title}>Удалить n записей?</span>
      <Button isFullWidth isShort onClick={removeHandler}>
        Удалить
      </Button>
      <Button
        isFullWidth
        isShort
        isSecondary
        onClick={dropdownVisibilityHandler}
      >
        Отмена
      </Button>
    </div>
  );
}
