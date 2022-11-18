import cn from "classnames";
import styles from "./TableRow.module.css";
import { string, node } from "prop-types";

TableRow.propTypes = {
  className: string,
  children: node,
};

export function TableRow({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}
