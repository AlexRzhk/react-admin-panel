import { classNames, split } from "../../../utils/classnames";
import { string, func, boolean } from "prop-types";
import { Input } from "../../../elements/Input/Input.jsx";
import { Icon } from "../../../elements/icons/icons.jsx";
import { Button } from "../../../elements/Button/Button.jsx";
import styles from "./MainFilter.module.css";

MainFilter.propTypes = {
  className: { string },
  additionalFilterVisibility: { boolean },
  handleSwitchAdditionalFilter: { func },
};

export function MainFilter({
  additionalFilterVisibility,
  handleSwitchAdditionalFilter,
  className,
}) {
  let componentStyles = styles["_"];
  if (className) {
    componentStyles += classNames({ ...split(className) });
  }
  return (
    <div className={componentStyles}>
      <div className={styles["leftBlock"]}>
        <div className={styles["searchbarWrapper"]}>
          <Input
            placeholder="Номер заказа или ФИО"
            prefix={<Icon type="search" />}
          />
        </div>
        <Button
          icon="filter"
          onClick={handleSwitchAdditionalFilter}
          isSecondary={additionalFilterVisibility}
        >
          Фильтры
        </Button>
        <Button>Сбросить фильтры</Button>
      </div>
      <div>
        <Button icon="refresh">Загрузка</Button>
      </div>
    </div>
  );
}
