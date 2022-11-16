import cn from "classnames";
import styles from "./OrderLIstTableHeader.module.css";
import rowStyles from "../RowMarkup.module.css";
import { TableHeader } from "../../../../elements/Table/TableHeader/TableHeader";
import { TableRow } from "../../../../elements/Table/TableRow/TableRow";
import { TableCell } from "../../../../elements/Table/TableCell/TableCell";
import { Checkbox } from "../../../../elements/Checkbox/Checkbox";
import { TableHeaderCell } from "../../../../elements/Table/TableHeaderCell/TableHeaderCell";
import { Icon } from "../../../../elements/icons/Icon";
import { string, func, bool } from "prop-types";

OrderListTableHeader.propTypes = {
  activeSorter: string,
  setActiveSorter: func,
  isAllRowChecked: bool,
  checkAllRows: func,
};

export function OrderListTableHeader({
  activeSorter,
  setActiveSorter,
  isAllRowChecked,
  checkAllRows,
}) {
  const createHandleChangeActiveSorter = (sorterName) => () => {
    activeSorter !== sorterName && setActiveSorter(sorterName);
  };

  return (
    <TableHeader>
      <TableRow>
        <TableCell className={rowStyles.checkbox}>
          <Checkbox checked={isAllRowChecked} onChange={checkAllRows} />
        </TableCell>

        <TableCell className={rowStyles.index}>#</TableCell>

        <TableHeaderCell
          className={cn(rowStyles.date, {
            [styles.activeSorter]: activeSorter === "date",
          })}
          onClick={createHandleChangeActiveSorter("date")}
        >
          Дата
          <Icon
            type="arrow"
            className={cn({ [styles.flipped]: activeSorter === "date" })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.status, {
            [styles.activeSorter]: activeSorter === "status",
          })}
          onClick={createHandleChangeActiveSorter("status")}
        >
          Статус
          <Icon
            type="arrow"
            className={cn({ [styles.flipped]: activeSorter === "status" })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.numberOfPositions, {
            [styles.activeSorter]: activeSorter === "numberOfPositions",
          })}
          onClick={createHandleChangeActiveSorter("numberOfPositions")}
        >
          Позиций
          <Icon
            type="arrow"
            className={cn({
              [styles.flipped]: activeSorter === "numberOfPositions",
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.sum, {
            [styles.activeSorter]: activeSorter === "sum",
          })}
          onClick={createHandleChangeActiveSorter("sum")}
        >
          Сумма
          <Icon
            type="arrow"
            className={cn({ [styles.flipped]: activeSorter === "sum" })}
          />
        </TableHeaderCell>

        <TableCell className={rowStyles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}
