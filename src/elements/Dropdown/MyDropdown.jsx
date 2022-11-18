import React from "react";
import { useState } from "react";
import cn from "classnames";
import styles from "./MyDropdown.module.css";
import { string, node } from "prop-types";

MyDropdown.propTypes = {
  trigger: node,
  children: node,
  childrenClassName: string,
  triggerClassNameWithActiveTrigger: string,
};

const mixHandlers = (firstHandler, secondHandler) => () => {
  firstHandler();
  if (secondHandler) {
    secondHandler();
  }
};

export function MyDropdown({
  trigger,
  children,
  childrenClassName,
  triggerClassNameWithActiveTrigger,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const mixedHandlers = mixHandlers(toggleDropdown, trigger.props.onClick);
  const TriggerElement = React.cloneElement(trigger, {
    onClick: mixedHandlers,
    className: cn(
      { [triggerClassNameWithActiveTrigger]: isVisible },
      trigger.props.className
    ),
  });

  return (
    <div className={styles.trigger}>
      {TriggerElement}
      {isVisible && (
        <div className={cn(childrenClassName, styles.overlay)}>{children}</div>
      )}
    </div>
  );
}
