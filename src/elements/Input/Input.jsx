import styles from "./Input.module.css";
import { Button } from "../Button/Button";
import { classNames, split } from "../../utils/classnames.js";

import { func, string, boolean } from "prop-types";
Input.propTypes = {
  value: { string },
  onChange: { func },
  resetValue: { func },
  isIncorrect: { boolean },
  disabled: { boolean },
  label: { string },
  placeholder: { string },
  prefix: { string },
  postfix: { string },
  className: { string },
  readOnly: { boolean },
};

const noop = () => {};

export function Input({
  value = "",
  onChange = noop,
  resetValue = noop,
  isIncorrect = false,
  disabled = false,
  label,
  placeholder,
  prefix,
  postfix = null,
  className = "",
  readOnly = false,
}) {
  if (disabled && isIncorrect) {
    isIncorrect = false;
  }
  let posfixElement;
  if (postfix) {
    posfixElement = postfix;
  } else if (disabled) {
    posfixElement = <Button disabled icon="locked" />;
  } else if (value) {
    posfixElement = <Button isShort icon="x-medium" onClick={resetValue} />;
  }
  let componentStyles = styles["_"];
  if (className) {
    componentStyles += classNames({ ...split(className) });
  }
  componentStyles += classNames(
    { incorrect: isIncorrect, disabled: disabled },
    styles
  );

  return (
    <div className={componentStyles}>
      <label className={styles["label"]}>
        {label}
        <div className={styles["wrapper"]}>
          {prefix && <span>{prefix}</span>}
          <input
            className={styles["area"]}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={!!disabled}
            readOnly={!!readOnly}
          />
          {posfixElement}
        </div>
      </label>
    </div>
  );
}
