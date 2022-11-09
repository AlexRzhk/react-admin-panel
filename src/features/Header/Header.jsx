import { Button } from "../../elements/Button/Button";
import styles from "./Header.module.css";
import { classNames, split } from "../../utils/classnames.js";
import { Switcher } from "../../elements/Dropdown/Switcher/Switcher";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, LIGHT_THEME } from "../../store/slices/themeSlice";
import { changeFilterVisibility } from "../../store/slices/filterVisibilitySlice";

import { string } from "prop-types";
Header.propTypes = {
  className: { string },
};

export function Header({ className }) {
  const theme = useSelector((state) => state.theme.value);
  const dropdownVisibility = useSelector(
    (state) => state.filterVisibility.value
  );
  const dispatch = useDispatch();

  function changeThemeWrapper(theme = LIGHT_THEME) {
    dispatch(changeTheme());
    if (theme === LIGHT_THEME) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  const visibilityHandler = () => {
    dispatch(changeFilterVisibility());
  };

  let componentStyles = styles["_"];
  if (className) {
    componentStyles += classNames(...split(className), styles);
  }
  return (
    <header className={componentStyles}>
      <div className={styles["text"]}>Список заказов</div>
      <Button
        icon={theme === LIGHT_THEME ? "sun" : "moon"}
        onClick={visibilityHandler}
      >
        {theme === LIGHT_THEME ? "Светлая тема" : "Темная тема"}
      </Button>
      {dropdownVisibility && (
        <div className={styles["dropdownWrapper"]}>
          <Switcher currentTheme={theme} changeTheme={changeThemeWrapper} />
        </div>
      )}
    </header>
  );
}
