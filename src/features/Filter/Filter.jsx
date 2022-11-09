import { classNames, split } from "../../utils/classnames.js";
import styles from "./Filter.module.css";
import { string, func, boolean } from "prop-types";
import { MainFilter } from "./MainFilter/MainFilter.jsx";
import { StatusFilterContainer } from "./AdditionalFilter/StatusFilter/StatusFilter.jsx";
import { DateFilter } from "./AdditionalFilter/DateFilter/DateFilter.jsx";
import { SumFilter } from "./AdditionalFilter/SumFilter/SumFilter.jsx";
import { Button } from "../../elements/Button/Button.jsx";
import { AdditionalFilter } from "./AdditionalFilter/AdditionalFilter.jsx";
Filter.propTypes = {
  className: { string },
  additionalFilterVisibility: { boolean },
  handleSwitchAdditionalFilter: { func },
};

export function Filter({
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
