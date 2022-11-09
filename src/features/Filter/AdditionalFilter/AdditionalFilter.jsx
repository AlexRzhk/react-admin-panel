import styles from "./AdditionalFilter.module.css";
import { classNames, split } from "../../../utils/classnames.js";

import { string } from "prop-types";
AdditionalFilter.propTypes = {
  className: { string },
  children: { string },
};

export function AdditionalFilter({ className, children }) {
  let AdditionalFilterStyles = styles["_"];
  if (className) {
    AdditionalFilterStyles += classNames({ ...split(className) });
  }
  return <div className={AdditionalFilterStyles}>{children}</div>;
}
