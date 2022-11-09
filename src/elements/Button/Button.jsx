import { Icon } from "../icons/icons";
import styles from "./Button.module.css";
import { classNames, split } from "../../utils/classnames";

import { string, func, boolean, children, array } from "prop-types";

Button.propTypes = {
  disabled: { boolean },
  children: { children },
  isFullWidth: { boolean },
  isShort: { boolean },
  isSecondary: { boolean },
  icon: { string },
  onClick: { func },
  type: { string },
  className: { string },
  props: { array },
};
let noop = () => {};

export function Button({
  isFullWidth = false,
  isShort = false,
  isSecondary = false,
  children,
  icon,
  onClick = noop,
  type,
  disabled = false,
  className = "",
  ...props
}) {
  let buttonStyles = styles["_"];
  if (!children) {
    buttonStyles += " " + styles["icon-only"];
  }
  buttonStyles += classNames(
    {
      "full-width": isFullWidth,
      secondary: isSecondary,
      short: isShort,
      disabled: disabled,
    },
    styles
  );
  if (className) {
    buttonStyles += classNames(split(className));
  }
  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      <Icon type={icon} />
      {children}
    </button>
  );
}
