import { Input } from "../../../../elements/Input/Input.jsx";
import styles from "./DateFilter.module.css";
import { classNames, split } from "../../../../utils/classnames";

import { string } from "prop-types";
DateFilter.propTypes = {
  className: { string },
};

export function DateFilter({ className }) {
  let DateFilterStyles = styles["_"];
  if (className) {
    DateFilterStyles += classNames({ ...split(className) });
  }
  return (
    <div className={DateFilterStyles}>
      <Input
        value="20.01.2021"
        prefix="c"
        placeholder="dd.mm.yyyy"
        label="Дата оформления"
      ></Input>
      <Input prefix="по" placeholder="dd.mm.yyyy"></Input>
    </div>
  );
}
