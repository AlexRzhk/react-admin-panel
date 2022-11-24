import cn from "classnames";
import styles from "./OrderLIstTableHeader.module.css";
import rowStyles from "../RowMarkup.module.css";
import { TableHeader } from "../../../../elements/Table/TableHeader/TableHeader";
import { TableRow } from "../../../../elements/Table/TableRow/TableRow";
import { TableCell } from "../../../../elements/Table/TableCell/TableCell";
import { Checkbox } from "../../../../elements/Checkbox/Checkbox";
import { TableHeaderCell } from "../../../../elements/Table/TableHeaderCell/TableHeaderCell";
import { Icon } from "../../../../elements/icons/Icon";
import {
  changeActiveSorter,
  changeSorterDirection,
} from "../../../store/Filters/FiltersSlice";
import { useDispatch, useSelector } from "react-redux";

OrderListTableHeader.propTypes = {};

export function OrderListTableHeader() {
  const { activeSorter, isAscending } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const createHandleChangeActiveSorter = (sorter) => () => {
    if (activeSorter === sorter) {
      dispatch(changeSorterDirection());
    } else {
      dispatch(changeActiveSorter(sorter));
    }
  };

  return (
    <TableHeader>
      <TableRow>
        <TableCell className={rowStyles.checkbox}>
          <Checkbox checked={false} />
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
            className={cn({
              [styles.flipped]: activeSorter === "date" && !isAscending,
            })}
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
            className={cn({
              [styles.flipped]: activeSorter === "status" && !isAscending,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.numberOfPositions, {
            [styles.activeSorter]: activeSorter === "positionCount",
          })}
          onClick={createHandleChangeActiveSorter("positionCount")}
        >
          Позиций
          <Icon
            type="arrow"
            className={cn({
              [styles.flipped]:
                activeSorter === "positionCount" && !isAscending,
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
            className={cn({
              [styles.flipped]: activeSorter === "sum" && !isAscending,
            })}
          />
        </TableHeaderCell>

        <TableCell className={rowStyles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}
