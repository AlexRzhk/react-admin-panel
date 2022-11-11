import { Icon } from "../icons/Icon";
import styles from "./Button.module.css";
import cn from "classnames";

import { string, func, bool, array, node } from "prop-types";

Button.propTypes = {
  disabled: bool,
  children: node,
  isFullWidth: bool,
  isShort: bool,
  isSecondary: bool,
  icon: string,
  onClick: func,
  type: string,
  className: string,
  props: array,
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
  let buttonStyles = cn(styles._, className, {
    [styles.fullWidth]: isFullWidth,
    [styles.secondary]: isSecondary,
    [styles.short]: isShort,
    [styles.disabled]: disabled,
    [styles.iconOnly]: !children,
  });

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
