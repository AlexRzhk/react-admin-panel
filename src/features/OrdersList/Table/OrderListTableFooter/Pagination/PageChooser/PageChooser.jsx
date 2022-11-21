import { Input } from "../../../../../../elements/Input/Input";
import { number } from "prop-types";
import { changeCurrentPage } from "../../../../../store/Filters/FiltersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ENTER_KEY_CODE = 13;

PageChooser.propTypes = {
  maxPage: number,
};

export function PageChooser({ maxPage }) {
  const [inputValue, setInputValue] = useState("1");

  const handleChangeValue = ({ target: { value } }) => {
    if (Number.isInteger(Number(value)) && value[0] !== "0")
      setInputValue(value);
  };

  const handleResetValue = () => {
    setInputValue("");
  };

  const { currentPage } = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const selectPage = (e) => {
    if (
      e &&
      e.keyCode === ENTER_KEY_CODE &&
      currentPage !== e.target.value &&
      e.target.value <= maxPage &&
      e.target.value > 0
    ) {
      dispatch(changeCurrentPage(Number(e.target.value)));
    }
    setInputValue("");
  };

  return (
    <>
      Номер страницы
      <Input
        value={inputValue}
        isIncorrect={inputValue > maxPage || inputValue < 1}
        onReset={handleResetValue}
        onChange={handleChangeValue}
        onKeyDown={selectPage}
        placeholder="Введите номер"
      />
    </>
  );
}
