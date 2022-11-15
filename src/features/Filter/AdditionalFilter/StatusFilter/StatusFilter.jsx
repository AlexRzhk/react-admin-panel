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
  statusNames: object,
};

export function StatusFilterContainer({ className }) {
  const {
    handleChangeStatusChoose,
    statuses,
    statusNames,
    handleStatusChange,
  } = useContext(FiltersContext);
  const statusChangeHandler = (status) => {
    handleChangeStatusChoose(status);
    handleStatusChange(status);
  };

  let checkedValues = Object.keys(statuses).filter((el) => statuses[el]);
  if (
    checkedValues.length === 0 ||
    checkedValues.length === Object.keys(statuses).length
  ) {
    checkedValues = "Любой";
  } else {
    let res = "";
    for (let elem of checkedValues) {
      res += statusNames[elem] + " ";
    }
    checkedValues = res;
  }

  return (
    <StatusFilter
      className={className}
      statusValues={statuses}
      statusNames={statusNames}
      handleChangeStatusValues={statusChangeHandler}
      checkedValues={checkedValues}
    />
  );
}

function StatusFilter({
  className,
  handleChangeStatusValues,
  statusValues,
  statusNames,
  checkedValues,
}) {
  const statusFilterStyles = cn(styles._, className);
  const buttonStyles = cn(styles.button, styles.themeIcon);

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
        statusNames={statusNames}
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
    </div>
  );
}
