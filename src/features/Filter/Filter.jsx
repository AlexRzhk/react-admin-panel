import styles from "./Filter.module.css";
import { string, func, bool } from "prop-types";
import { MainFilter } from "./MainFilter/MainFilter.jsx";
import { StatusFilterContainer } from "./AdditionalFilter/StatusFilter/StatusFilter.jsx";
import { DateFilter } from "./AdditionalFilter/DateFilter/DateFilter.jsx";
import { SumFilter } from "./AdditionalFilter/SumFilter/SumFilter.jsx";
import { Button } from "../../elements/Button/Button.jsx";
import { AdditionalFilter } from "./AdditionalFilter/AdditionalFilter.jsx";
import cn from "classnames";
Filter.propTypes = {
  className: string,
  additionalFilterVisibility: bool,
  handleSwitchAdditionalFilter: func,
};

export function Filter({
  additionalFilterVisibility,
  handleSwitchAdditionalFilter,
  className,
}) {
  let componentStyles = cn(styles._, className);

  return (
    <div className={componentStyles}>
      <MainFilter
        additionalFilterVisibility={additionalFilterVisibility}
        handleSwitchAdditionalFilter={handleSwitchAdditionalFilter}
      />
      {additionalFilterVisibility && (
        <AdditionalFilter>
          <DateFilter />
          <StatusFilterContainer />
          <SumFilter />
          <Button>Применить</Button>
        </AdditionalFilter>
      )}
    </div>
  );
}
