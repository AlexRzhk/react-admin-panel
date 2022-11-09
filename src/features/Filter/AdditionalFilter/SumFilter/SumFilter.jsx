import styles from "./SumFilter.module.css";
import { classNames, split } from "../../../../utils/classnames";

import { string } from "prop-types";
import { Input } from "../../../../elements/Input/Input";
SumFilter.propTypes = {
  className: { string },
};

export function SumFilter({ className }) {
  let SumFilterStyles = styles["_"];
  if (className) {
    SumFilterStyles += classNames(split(className));
  }
  return (
    <div className={SumFilterStyles}>
      <Input placeholder="&#8381;" prefix="от" label="Сумма заказа" />
      <Input placeholder="&#8381;" prefix="до" />
    </div>
  );
}
