import styles from "./Filter.module.css";
import { string } from "prop-types";
import { MainFilter } from "./MainFilter/MainFilter.jsx";
import { StatusFilterContainer } from "./AdditionalFilter/StatusFilter/StatusFilter.jsx";
import { DateFilter } from "./AdditionalFilter/DateFilter/DateFilter.jsx";
import { SumFilter } from "./AdditionalFilter/SumFilter/SumFilter.jsx";
import { Button } from "../../elements/Button/Button.jsx";
import { AdditionalFilter } from "./AdditionalFilter/AdditionalFilter.jsx";
import cn from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAdditionalFilters } from "../store/Filters/FiltersSlice";
Filter.propTypes = {
  className: string,
};

export function Filter({ className }) {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);

  const isAdditionalFiltersActive = useSelector(
    (state) => state.filters.isAdditionalFiltersActive
  );

  const dispatch = useDispatch();

  const handleActivateAdditionalFilters = () => {
    dispatch(activateAdditionalFilters());
  };

  const handleSwitchAdditionalFilter = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);

  const componentStyles = cn(styles._, className);

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
          <Button
            onClick={handleActivateAdditionalFilters}
            isSecondary={isAdditionalFiltersActive}
          >
            Применить
          </Button>
        </AdditionalFilter>
      )}
    </div>
  );
}
