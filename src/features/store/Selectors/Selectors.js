export const getCheckedStatuses = (state) => state.filters.checkedStatuses;
export const getSearchbarValue = (state) => state.filters.searchbar;

export const getCheckedOrdersID = (state) => state.orders.checkedOrdersID;
export const getCheckedOrdersIDLength = (state) =>
  state.orders.checkedOrdersID.length;

const getObjectDate = (dateString) => {
  return new Date(dateString);
};

const getSorter = (key, isAscending) => {
  const direction = isAscending ? -1 : 1;
  if (key === "positionCount" || key === "sum") {
    return (a, b) => {
      const symbol = "-";
      const firstElem = a[key] === symbol ? 0 : a[key];
      const secondElem = b[key] === symbol ? 0 : b[key];
      return firstElem > secondElem ? direction : -direction;
    };
  } else {
    return (a, b) => (a[key] > b[key] ? direction : -direction);
  }
};

const sortByKey = (key, isAscending, array) => {
  return array.sort(getSorter(key, isAscending));
};

export const getOrderByID = (id) => {
  return (state) => {
    let orders = [...state.orders.allOrders];
    orders = orders.filter((order) => order.id === id);
    return orders[0];
  };
};

export const getFilteredOrdersByPageAndAllOrdersLength = (state) => {
  const {
    searchbar,
    filterDateFromValue,
    filterDateToValue,
    checkedStatuses,
    filterSumFromValue,
    filterSumToValue,
    isAdditionalFiltersActive,
    activeSorter,
    isAscending,
    pageLimit,
    currentPage,
  } = state.filters;

  let filteredOrders = [...state.orders.allOrders];
  if (searchbar) {
    filteredOrders = filteredOrders.filter((order) => {
      return (
        order.fullName.toLowerCase().includes(searchbar.toLowerCase().trim()) ||
        String(order.id).includes(searchbar.trim())
      );
    });
  }

  if (isAdditionalFiltersActive) {
    if (filterSumFromValue) {
      filteredOrders = filteredOrders.filter(
        (order) => order.sum >= filterSumFromValue
      );
    }
    if (filterSumToValue) {
      filteredOrders = filteredOrders.filter((order) => {
        return order.sum <= filterSumToValue;
      });
    }

    if (filterDateFromValue) {
      filteredOrders = filteredOrders.filter(
        (order) => new Date(order.data) >= getObjectDate(filterDateFromValue)
      );
    }
    if (filterDateToValue) {
      filteredOrders = filteredOrders.filter((order) => {
        return new Date(order.data) <= getObjectDate(filterDateToValue);
      });
    }

    if (checkedStatuses.length > 0) {
      filteredOrders = filteredOrders.filter((order) =>
        checkedStatuses.includes(order.status)
      );
    }
  }

  const filteredAndSorted = sortByKey(
    activeSorter,
    isAscending,
    filteredOrders
  );

  const ordersByPage = filteredAndSorted.filter(
    (order, index) =>
      index >= pageLimit * (currentPage - 1) && index < pageLimit * currentPage
  );

  return [ordersByPage, filteredAndSorted.length];
};
