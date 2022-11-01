import styles from "./PageSelector.module.css";
import { Input } from "../../Input/Input";

export function PageSelector() {
  let PageSelectorClassName = styles._ + " " + styles["page-number-choose"];

  return (
    <div className={PageSelectorClassName}>
      <Input
        className={""}
        label="Номер страницы"
        placeholder="Введите номер"
        textBefore={null}
      />
    </div>
  );
}
