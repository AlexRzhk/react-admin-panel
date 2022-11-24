import { statusNames } from "../../../App";

import { useDispatch, useSelector } from "react-redux";
import styles from "./StatusSelectorByModal.module.css";

import { func } from "prop-types";
import { changeModalValue } from "../../store/form/formSlice";

StatusSelectorByModal.propTypes = {
  onDropdownClose: func,
};

export function StatusSelectorByModal({ onDropdownClose }) {
  const statuses = Object.keys(statusNames);
  const modalStatus = useSelector((state) => state.modal.status);

  const dispatch = useDispatch();
  const handleChangeModalStatus = (newStatus) => {
    dispatch(changeModalValue({ valueName: "status", newValue: newStatus }));
    onDropdownClose();
  };

  return (
    <>
      {statuses.map((status) => (
        <label className={styles.item} key={status}>
          <input
            type="radio"
            value={status}
            checked={modalStatus === status}
            onChange={() => handleChangeModalStatus(status)}
            className={styles.radio}
            id={status}
            name="radioGroup"
          />
          <div className={styles.statusName}>{statusNames[status]}</div>
        </label>
      ))}
    </>
  );
}
