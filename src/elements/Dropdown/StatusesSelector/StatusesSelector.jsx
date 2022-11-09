import { Checkbox } from "../../Checkbox/Checkbox.jsx";
import styles from "./StatusesSelector.module.css";
import { func, object } from "prop-types";
StatusesSelector.propTypes = {
  statusValues: { object },
  handleChangeStatusValues: { func },
};

export function StatusesSelector({ statusValues, handleChangeStatusValues }) {
  let key = 0;
  const statuses = Object.entries(statusValues);
  return (
    <div className={styles["_"]}>
      {statuses.map((el) => {
        key++;
        return (
          <div key={key} className={styles["item"]}>
            <Checkbox checked={el[1]} />
            <span>{el[0]}</span>
            <button
              className={styles["upperLayer"]}
              onClick={() => handleChangeStatusValues(el[0])}
            />
          </div>
        );
      })}
    </div>
  );
}
