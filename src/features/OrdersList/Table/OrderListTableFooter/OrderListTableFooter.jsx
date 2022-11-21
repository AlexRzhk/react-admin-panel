import { DeletionApprover } from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";
import { Button } from "../../../../elements/Button/Button";
import { TableFooter } from "../../../../elements/Table/TableFooter/TableFooter";
import { MyDropdown } from "../../../../elements/Dropdown/MyDropdown";
import { number } from "prop-types";
import { Pagination } from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import { getCheckedOrdersIdLength } from "../../../store/Selectors/Selectors";
import { StatusChooser } from "./StatusChooser/StatusChooser";

OrderListTableFooter.propTypes = {
  ordersLength: number,
};

export function OrderListTableFooter({ ordersLength }) {
  const numberOfCheckedOrders = useSelector(getCheckedOrdersIdLength);

  const deleteElements = (
    <Button icon="bin" theme="warning" size="short" isDanger={true}>
      Удалить
    </Button>
  );

  const elementChooseStatus = (
    <Button icon="pencil" isSecondary={true} size="short">
      Изменить статус
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <div className={styles.block}>
        <span>Выбрано записей: {numberOfCheckedOrders}</span>
        <MyDropdown
          trigger={elementChooseStatus}
          childrenClassName={styles.statusChooser}
        >
          <StatusChooser />
        </MyDropdown>

        <MyDropdown
          trigger={deleteElements}
          childrenClassName={styles.dropdown}
        >
          <DeletionApprover numberOfCheckedOrders={numberOfCheckedOrders} />
        </MyDropdown>
      </div>
      <div className={styles.block}>
        <Pagination ordersLength={ordersLength} />
      </div>
    </TableFooter>
  );
}
