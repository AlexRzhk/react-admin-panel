import { useState } from "react";
import styles from "./StatusFilter.module.css";
import { classNames, split } from "../../../../utils/classnames";

import { string, boolean, func, object } from "prop-types";
import { Input } from "../../../../elements/Input/Input";
import { Button } from "../../../../elements/Button/Button";
import { StatusesSelector } from "../../../../elements/Dropdown/StatusesSelector/StatusesSelector";
StatusFilterContainer.propTypes = {
  className: { string },
};
StatusFilter.propTypes = {
  className: { string },
  isDropdownVisible: { boolean },
  switchVisibilityHandler: { func },
  handleChangeStatusValues: { func },
  statusValues: { object },
  checkedValues: { string },
};

export function StatusFilterContainer({ className }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [statusValues, setStatusValues] = useState({
    Новый: false,
    Рассчет: false,
    Подтвержден: false,
    Отложен: false,
    Выполнен: false,
    Отменен: false,
  });

  const handleChangeStatusValues = (el) => {
    setStatusValues({ ...statusValues, [el]: !statusValues[el] });
  };

  const switchVisibilityHandler = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  let checkedValues = Object.keys(statusValues).filter(
    (el) => statusValues[el]
  );
  if (
    checkedValues.length === 0 ||
    checkedValues.length === Object.keys(statusValues).length
  ) {
    checkedValues = "Любой";
  } else {
    checkedValues = checkedValues.join(", ");
  }

  return (
    <StatusFilter
      className={className}
      isDropdownVisible={isDropdownVisible}
      switchVisibilityHandler={switchVisibilityHandler}
      statusValues={statusValues}
      handleChangeStatusValues={handleChangeStatusValues}
      checkedValues={checkedValues}
    />
  );
}

function StatusFilter({
  className,
  isDropdownVisible,
  switchVisibilityHandler,
  handleChangeStatusValues,
  statusValues,
  checkedValues,
}) {
  let StatusFilterStyles = styles["_"];
  if (className) {
    StatusFilterStyles += classNames(split(className));
  }
  let ButtonStyles = styles["button"] + " " + styles["theme-icon"];
  if (isDropdownVisible) {
    ButtonStyles += " " + styles["flipped"];
  }

  return (
    <div className={StatusFilterStyles}>
      <Input
        value={checkedValues}
        readOnly
        label="Статус заказа"
        postfix={
          <Button
            className={ButtonStyles}
            icon="arrow"
            onClick={switchVisibilityHandler}
          />
        }
      />
      <div>
        {isDropdownVisible && (
          <div className={styles["dropdownWrapper"]}>
            <StatusesSelector
              statusValues={statusValues}
              handleChangeStatusValues={handleChangeStatusValues}
            />
          </div>
        )}
      </div>
    </div>
  );
}
