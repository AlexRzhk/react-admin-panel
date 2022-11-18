import { DeletionApprover } from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";
import { Button } from "../../../../elements/Button/Button";
import { TableFooter } from "../../../../elements/Table/TableFooter/TableFooter";
import { MyDropdown } from "../../../../elements/Dropdown/MyDropdown";
import { number } from "prop-types";
import { Pagination } from "./Pagination/Pagination";

OrderListTableFooter.propTypes = {
  chosenOrdersLength: number,
  ordersLength: number,
};

export function OrderListTableFooter({ chosenOrdersLength, ordersLength }) {
  const toggleElement = (
    <Button icon="bin" theme="warning" size="short" isDanger={true}>
      Удалить
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <div className={styles.block}>
        <span>Выбрано записей: {chosenOrdersLength}</span>
        <Button icon="pencil" theme="primary" size="short">
          Изменить статус
        </Button>

        <MyDropdown trigger={toggleElement} childrenClassName={styles.dropdown}>
          <DeletionApprover numberOfCheckedOrders={chosenOrdersLength} />
        </MyDropdown>
      </div>
      <div className={styles.block}>
        <Pagination ordersLength={ordersLength} />
      </div>
    </TableFooter>
  );
}
