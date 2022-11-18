import styles from "./SumFilter.module.css";
import cn from "classnames";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";

import { string } from "prop-types";
import { Input } from "../../../../elements/Input/Input";
SumFilter.propTypes = {
  className: string,
};

export function SumFilter({ className }) {
  const {
    filterSumFromValue,
    handleChangeFilterSumFromValue,
    handleResetFilterSumFromValue,
    filterSumToValue,
    handleChangeFilterSumToValue,
    handleResetFilterSumToValue,
  } = useContext(FiltersContext);

  const SumFilterStyles = cn(styles._, className);
  return (
    <div className={SumFilterStyles}>
      <Input
        placeholder="&#8381;"
        prefix="от"
        label="Сумма заказа"
        value={filterSumFromValue}
        onChange={handleChangeFilterSumFromValue}
        onReset={handleResetFilterSumFromValue}
      />
      <Input
        placeholder="&#8381;"
        prefix="до"
        value={filterSumToValue}
        onChange={handleChangeFilterSumToValue}
        onReset={handleResetFilterSumToValue}
      />
    </div>
  );
}
