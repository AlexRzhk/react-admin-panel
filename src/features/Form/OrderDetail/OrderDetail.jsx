import cn from "classnames";
import styles from "./OrderDetail.module.css";
import { Table } from "../../../elements/Table/Table";
import { TableHeader } from "../../../elements/Table/TableHeader/TableHeader";
import { TableRow } from "../../../elements/Table/TableRow/TableRow";
import { TableCell } from "../../../elements/Table/TableCell/TableCell";
import { TableBody } from "../../../elements/Table/TableBody/TableBody";
import { TableFooter } from "../../../elements/Table/TableFooter/TableFooter";
import { useSelector } from "react-redux";

export function OrderDetail() {
  const order = useSelector((state) => {
    return state.modal.order;
  });
  console.log(order);
  let index = 0;

  const elements = order.positions ? (
    order.positions?.map((position) => {
      index++;
      return (
        <TableRow key={index} className={cn(styles.row, styles.bodyRow)}>
          <TableCell className={styles.vendorCodeCell}>
            {position.vendorCode}
          </TableCell>
          <TableCell className={styles.nameCell}>{position.name}</TableCell>
          <TableCell className={styles.priceCell}>
            {position.price} &#8381;
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <></>
  );

  return (
    <Table className={styles._}>
      <TableHeader className={styles.header}>
        <TableRow className={styles.row}>
          <TableCell className={styles.vendorCodeCell}>Артикул</TableCell>
          <TableCell className={styles.nameCell}>Наименование</TableCell>
          <TableCell className={styles.priceCell}>Цена</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.body}>{elements}</TableBody>
      <TableFooter className={styles.footer}>
        Итоговая сумма: {order.sum} &#8381;
      </TableFooter>
    </Table>
  );
}