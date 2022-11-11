import { createContext, useState } from "react";
import "./App.css";
import { Filter } from "./features/Filter/Filter";

import { Header } from "./features/Header/Header";

export const FiltersContext = createContext("");

function App() {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const handleSwitchAdditionalFilter = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);

  const [searchbarValue, setSearchbarValues] = useState("");
  const [filterDateFromValue, setFilterDateFromValue] = useState("20.01.2021");
  const [filterDateToValue, setFilterDateToValue] = useState("");
  const [filterSumFromValue, setFilterSumFromValue] = useState("5000");
  const [filterSumToValue, setFilterSumToValue] = useState("");
  const [filterOfStatuses, setFilterOfStatuses] = useState({
    Новый: false,
    Расчет: false,
    Подтвержден: false,
    Отложен: false,
    Выполнен: false,
    Отменен: false,
  });

  const createHandleChange = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(""),
  ];
  const [handleChangeSearchbar, handleResetSearchbar] =
    createHandleChange(setSearchbarValues);
  const [handleChangeFilterDateFromValue, handleResetFilterDateFromValue] =
    createHandleChange(setFilterDateFromValue);
  const [handleChangeFilterDateToValue, handleResetFilterDateToValue] =
    createHandleChange(setFilterDateToValue);
  const [handleChangeFilterSumFromValue, handleResetFilterSumFromValue] =
    createHandleChange(setFilterSumFromValue);
  const [handleChangeFilterSumToValue, handleResetFilterSumToValue] =
    createHandleChange(setFilterSumToValue);
  const handleResetAllFilters = () => {
    setSearchbarValues("");
    setFilterDateFromValue("");
    setFilterDateToValue("");
    setFilterSumFromValue("");
    setFilterSumToValue("");
    setFilterOfStatuses({
      Новый: false,
      Расчет: false,
      Подтвержден: false,
      Отложен: false,
      Выполнен: false,
      Отменен: false,
    });
  };

  const handleChangeStatusChoose = (status) => {
    setFilterOfStatuses({
      ...filterOfStatuses,
      [status]: !filterOfStatuses[status],
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        searchbarValue,
        handleChangeSearchbar,
        handleResetSearchbar,
        filterDateFromValue,
        handleChangeFilterDateFromValue,
        handleResetFilterDateFromValue,
        filterDateToValue,
        handleChangeFilterDateToValue,
        handleResetFilterDateToValue,
        filterSumFromValue,
        handleChangeFilterSumFromValue,
        handleResetFilterSumFromValue,
        filterSumToValue,
        handleChangeFilterSumToValue,
        handleResetFilterSumToValue,
        filterOfStatuses,
        handleChangeStatusChoose,
        handleResetAllFilters,
      }}
    >
      <div className="pageWrapper">
        <Header />
        <Filter
          additionalFilterVisibility={additionalFilterVisibility}
          handleSwitchAdditionalFilter={handleSwitchAdditionalFilter}
        />
      </div>
    </FiltersContext.Provider>
  );
}

export default App;
