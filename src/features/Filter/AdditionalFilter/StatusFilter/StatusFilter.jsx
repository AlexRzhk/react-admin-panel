import { useContext } from "react";
import styles from "./StatusFilter.module.css";
import cn from "classnames";
import statusSelectorStyles from "./StatusesSelector/StatusesSelector.module.css";

import { string, bool, func, object } from "prop-types";
import { Input } from "../../../../elements/Input/Input";
import { Button } from "../../../../elements/Button/Button";
import { StatusesSelector } from "./StatusesSelector/StatusesSelector";
import { FiltersContext } from "../../../../App";
import { MyDropdown } from "../../../../elements/Dropdown/MyDropdown";
StatusFilterContainer.propTypes = {
  className: string,
};
StatusFilter.propTypes = {
  className: string,
  isDropdownVisible: bool,
  switchVisibilityHandler: func,
  handleChangeStatusValues: func,
  statusValues: object,
  checkedValues: string,
};

export function StatusFilterContainer({ className }) {
  let { filterOfStatuses, handleChangeStatusChoose } =
    useContext(FiltersContext);

  let checkedValues = Object.keys(filterOfStatuses).filter(
    (el) => filterOfStatuses[el]
  );
  if (
    checkedValues.length === 0 ||
    checkedValues.length === Object.keys(filterOfStatuses).length
  ) {
    checkedValues = "Любой";
  } else {
    checkedValues = checkedValues.join(", ");
  }

  return (
    <StatusFilter
      className={className}
      statusValues={filterOfStatuses}
      handleChangeStatusValues={handleChangeStatusChoose}
      checkedValues={checkedValues}
    />
  );
}

function StatusFilter({
  className,
  handleChangeStatusValues,
  statusValues,
  checkedValues,
}) {
  let statusFilterStyles = cn(styles._, className);
  let buttonStyles = cn(styles.button, styles.themeIcon);

  const toggleElement = <Button icon="arrow" className={buttonStyles} />;

  const dropdownElement = (
    <MyDropdown
      trigger={toggleElement}
      childrenClassName={cn(
        statusSelectorStyles._,
        statusSelectorStyles.wrapper
      )}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusesSelector
        statusValues={statusValues}
        handleChangeStatusValues={handleChangeStatusValues}
      />
    </MyDropdown>
  );

  return (
    <div className={statusFilterStyles}>
      <Input
        value={checkedValues}
        readOnly
        label="Статус заказа"
        postfix={dropdownElement}
      />
      <div></div>
    </div>
  );
}
