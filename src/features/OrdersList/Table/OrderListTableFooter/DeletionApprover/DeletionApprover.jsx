import { Button } from "../../../../../elements/Button/Button";
import { number } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrders } from "../../../../store/Orders/OrdersSlice";
import {
  changeCurrentPage,
  resetAllCheckOrders,
} from "../../../../store/Filters/FiltersSlice";

DeletionApprover.propTypes = {
  numberOfCheckedOrders: number,
};

export function DeletionApprover({ numberOfCheckedOrders }) {
  const checkedOrders = useSelector((state) => state.filters.checkedOrdersId);
  const dispatch = useDispatch();

  const handleDeleteChosenOrders = () => {
    dispatch(deleteOrders(checkedOrders));
    dispatch(resetAllCheckOrders());
    dispatch(changeCurrentPage(1));
  };

  let question = getRightQuestion(numberOfCheckedOrders);

  return (
    <>
      {question}
      <Button size="short" isFullWidth onClick={handleDeleteChosenOrders}>
        Удалить
      </Button>
      <Button size="short" isSecondary={true} isFullWidth>
        Отмена
      </Button>
    </>
  );
}

function getRightQuestion(numberOfCheckedOrders) {
  if (numberOfCheckedOrders <= 20) {
    if (numberOfCheckedOrders === 1) {
      return `Удалить ${numberOfCheckedOrders} запись?`;
    }
    if (numberOfCheckedOrders > 1 && numberOfCheckedOrders < 5) {
      return `Удалить ${numberOfCheckedOrders} записи?`;
    } else {
      return `Удалить ${numberOfCheckedOrders} записей?`;
    }
  } else {
    if (numberOfCheckedOrders % 10 === 1) {
      return `Удалить ${numberOfCheckedOrders} запись?`;
    }
    if (numberOfCheckedOrders % 10 > 1 && numberOfCheckedOrders % 10 < 5) {
      return `Удалить ${numberOfCheckedOrders} записи?`;
    } else {
      return `Удалить ${numberOfCheckedOrders} записей?`;
    }
  }
}
