import { Input } from "../../../../elements/Input/Input.jsx";
import styles from "./DateFilter.module.css";
import cn from "classnames";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";

import { string } from "prop-types";
DateFilter.propTypes = {
  className: string,
};

export function DateFilter({ className }) {
  let {
    filterDateFromValue,
    handleChangeFilterDateFromValue,
    handleResetFilterDateFromValue,
    filterDateToValue,
    handleChangeFilterDateToValue,
    handleResetFilterDateToValue,
  } = useContext(FiltersContext);

  let DateFilterStyles = cn(styles._, className);
  return (
    <div className={DateFilterStyles}>
      <Input
        value={filterDateFromValue}
        prefix="c"
        placeholder="dd.mm.yyyy"
        label="Дата оформления"
        onChange={handleChangeFilterDateFromValue}
        onReset={handleResetFilterDateFromValue}
      />
      <Input
        value={filterDateToValue}
        prefix="по"
        placeholder="dd.mm.yyyy"
        onChange={handleChangeFilterDateToValue}
        onReset={handleResetFilterDateToValue}
      />
    </div>
  );
}
