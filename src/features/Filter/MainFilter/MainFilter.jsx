import { string, func, bool } from "prop-types";
import { Input } from "../../../elements/Input/Input.jsx";
import { Icon } from "../../../elements/icons/Icon.jsx";
import { Button } from "../../../elements/Button/Button.jsx";
import styles from "./MainFilter.module.css";
import cn from "classnames";
import { useContext } from "react";
import { FiltersContext } from "../../../App";

MainFilter.propTypes = {
  className: string,
  additionalFilterVisibility: bool,
  handleSwitchAdditionalFilter: func,
};

export function MainFilter({
  additionalFilterVisibility,
  handleSwitchAdditionalFilter,
  className,
}) {
  let {
    searchbarValue,
    handleChangeSearchbar,
    handleResetSearchbar,
    handleResetAllFilters,
  } = useContext(FiltersContext);
  let componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <div className={styles.leftBlock}>
        <div className={styles.searchbarWrapper}>
          <Input
            placeholder="Номер заказа или ФИО"
            prefix={<Icon type="search" />}
            value={searchbarValue}
            onReset={handleResetSearchbar}
            onChange={handleChangeSearchbar}
          />
        </div>
        <Button
          icon="filter"
          onClick={handleSwitchAdditionalFilter}
          isSecondary={additionalFilterVisibility}
        >
          Фильтры
        </Button>
        <Button onClick={handleResetAllFilters}>Сбросить фильтры</Button>
      </div>
      <div>
        <Button icon="refresh">Загрузка</Button>
      </div>
    </div>
  );
}
