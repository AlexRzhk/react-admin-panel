import styles from "./OrderListTableFooter.module.css";
import { TableFooter } from "../../../../elements/Table/TableFooter/TableFooter";
import { number } from "prop-types";
import { Pagination } from "./Pagination/Pagination";

OrderListTableFooter.propTypes = {
  ordersLength: number,
};

export function OrderListTableFooter({ ordersLength }) {
  return (
    <TableFooter className={styles._}>
      <div></div>
      <div className={styles.block}>
        <Pagination ordersLength={ordersLength} />
      </div>
    </TableFooter>
  );
}
