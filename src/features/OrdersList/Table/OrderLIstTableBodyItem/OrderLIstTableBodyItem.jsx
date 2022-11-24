import cn from "classnames";
import { StatusCell } from "./StatusCell/StatusCell";
import rowStyles from "../RowMarkup.module.css";
import styles from "./OrderLIstTableBodyItem.module.css";
import { TableCell } from "../../../../elements/Table/TableCell/TableCell";
import { Checkbox } from "../../../../elements/Checkbox/Checkbox";
import { TableRow } from "../../../../elements/Table/TableRow/TableRow";

import { string, number, func, bool, any } from "prop-types";

OrderListTableBodyItem.propTypes = {
  isChecked: bool,
  onChangeCheck: func,
  id: number,
  data: string,
  status: string,
  positionCount: any,
  sum: string,
  fullName: string,
};

export function OrderListTableBodyItem({
  isChecked,
  onChangeCheck,
  id,
  data,
  status,
  positionCount,
  sum,
  fullName,
}) {
  const RUB_SYMBOL = <span>&#8381;</span>;

  return (
    <TableRow className={cn(styles.bodyRow, { [styles.checked]: isChecked })}>
      <TableCell className={rowStyles.checkbox}>
        <Checkbox checked={isChecked} onChange={onChangeCheck} />
      </TableCell>

      <TableCell className={rowStyles.index}>{id}</TableCell>

      <TableCell className={rowStyles.date}>{data}</TableCell>

      <TableCell className={rowStyles.status}>
        <StatusCell status={status} />
      </TableCell>

      <TableCell className={rowStyles.numberOfPositions}>
        {positionCount}
      </TableCell>

      <TableCell className={rowStyles.sum}>
        {status === "canceled" ? sum : sum.toLocaleString("ru")}
        {status !== "canceled" && RUB_SYMBOL}
      </TableCell>

      <TableCell className={rowStyles.name}>{fullName}</TableCell>
    </TableRow>
  );
}
