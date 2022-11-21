import { statusNames } from "../../../../../App";
import { changeOrders } from "../../../../store/Orders/OrdersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StatusChooser.module.css";

export function StatusChooser() {
  const statuses = Object.keys(statusNames);

  const checkedOrders = useSelector((state) => state.filters.checkedOrdersId);

  const dispatch = useDispatch();

  const handleChangeOrdersStatuses = (status) => {
    dispatch(changeOrders({ newStatus: status, checkedOrders }));
  };

  return (
    <>
      {statuses.map((status) => (
        <label className={styles.item} key={status}>
          <input
            type="radio"
            value={status}
            onChange={() => handleChangeOrdersStatuses(status)}
            className={styles.radio}
            id={status}
            name="radioGroup"
          />
          <div className={styles.iconArea}>
            <svg
              className={styles.icon}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" stroke="none" />
            </svg>
          </div>
          <div className={styles.statusName}>{statusNames[status]}</div>
        </label>
      ))}
    </>
  );
}
