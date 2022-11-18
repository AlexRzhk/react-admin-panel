import { useState } from "react";
import { orders } from "../orders/orders";
import { Table } from "../../../elements/Table/Table";
import { OrderListTableHeader } from "./OrderLIstTableHeader/OrderListTableHeader";
import { TableBody } from "../../../elements/Table/TableBody/TableBody";
import { OrderListTableBodyItem } from "./OrderLIstTableBodyItem/OrderLIstTableBodyItem";
import { OrderListTableFooter } from "./OrderListTableFooter/OrderListTableFooter";
import styles from "./OrdersLIst.module.css";
import { Header } from "../../Header/Header";
import { Filter } from "../../Filter/Filter";
import { useContext } from "react";
import { FiltersContext } from "../../../App";

export function OrdersList() {
  const { additionalFilterVisibility, handleSwitchAdditionalFilter } =
    useContext(FiltersContext);
  const [activeSorter, setActiveSorter] = useState("date");
  const [checkedRows, setCheckedRows] = useState([]);

  const handleToggleRowCheck = (rowId) => {
    if (checkedRows.includes(rowId)) {
      setCheckedRows(checkedRows.filter((id) => rowId !== id));
    } else {
      const newCheckedRows = [...checkedRows];
      newCheckedRows.push(rowId);
      setCheckedRows(newCheckedRows);
    }
  };

  const checkAllRows = () => {
    if (orders.length === checkedRows.length) {
      setCheckedRows([]);
    } else setCheckedRows(orders.map((order) => order.id));
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Filter
        additionalFilterVisibility={additionalFilterVisibility}
        handleSwitchAdditionalFilter={handleSwitchAdditionalFilter}
      />
      <Table>
        <OrderListTableHeader
          isAllRowChecked={orders.length === checkedRows.length}
          activeSorter={activeSorter}
          setActiveSorter={setActiveSorter}
          checkAllRows={checkAllRows}
        />
        <TableBody>
          {orders.map((order) => (
            <OrderListTableBodyItem
              key={order.id}
              isChecked={checkedRows.includes(order.id)}
              onChangeCheck={() => handleToggleRowCheck(order.id)}
              {...order}
            />
          ))}
        </TableBody>
        <OrderListTableFooter
          chosenOrdersLength={checkedRows.length}
          ordersLength={orders.length}
        />
      </Table>
    </div>
  );
}
