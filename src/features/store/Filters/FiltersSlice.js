const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchbar: "",

  isAdditionalFiltersActive: false,

  filterDateFromValue: "",
  filterDateToValue: "",
  checkedStatuses: [],
  filterSumFromValue: "",
  filterSumToValue: "",

  activeSorter: "date",
  isAscending: true,

  checkedOrdersId: [],

  pageLimit: 15,
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearchbar(state, action) {
      return {
        ...state,
        searchbar: action.payload,
        checkedOrdersId: [],
      };
    },

    changeFilterDateFromValue(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        filterDateFromValue: action.payload,
      };
    },

    changeFilterDateToValue(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        filterDateToValue: action.payload,
      };
    },

    toggleStatusCheck(state, action) {
      if (state.checkedStatuses.includes(action.payload)) {
        return {
          ...state,
          isAdditionalFiltersActive: false,
          checkedStatuses: state.checkedStatuses.filter(
            (status) => status !== action.payload
          ),
        };
      }
      return {
        ...state,
        isAdditionalFiltersActive: false,
        checkedStatuses: [...state.checkedStatuses, action.payload],
      };
    },

    changeFilterSumFromValue(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        filterSumFromValue: action.payload,
      };
    },
    changeFilterSumToValue(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        filterSumToValue: action.payload,
      };
    },

    activateAdditionalFilters(state) {
      return { ...state, isAdditionalFiltersActive: true, checkedOrdersId: [] };
    },

    changeActiveSorter(state, action) {
      return {
        ...state,
        activeSorter: action.payload,
      };
    },

    changeSorterDirection(state) {
      return { ...state, isAscending: !state.isAscending };
    },

    resetAllFilters() {
      return initialState;
    },

    setOrderCheck(state, action) {
      if (state.checkedOrdersId.includes(action.payload)) {
        return {
          ...state,
          checkedOrdersId: state.checkedOrdersId.filter(
            (id) => id !== action.payload
          ),
        };
      }
      return {
        ...state,
        checkedOrdersId: [...state.checkedOrdersId, action.payload],
      };
    },
    resetAllCheckOrders(state) {
      return { ...state, checkedOrdersId: [] };
    },

    checkAllOrdersOnPage(state, action) {
      return { ...state, checkedOrdersId: action.payload };
    },

    changeCurrentPage(state, action) {
      return { ...state, currentPage: action.payload, checkedOrdersId: [] };
    },
  },
});

export const {
  changeSearchbar,
  changeFilterDateFromValue,
  changeFilterDateToValue,
  toggleStatus,
  resetAllFilters,
  changeFilterSumFromValue,
  changeFilterSumToValue,
  toggleFiltersActivation,
  toggleStatusCheck,
  activateAdditionalFilters,
  changeActiveSorter,
  changeSorterDirection,
  setOrderCheck,
  changeCurrentPage,
  checkAllOrdersOnPage,
  resetAllCheckOrders,
} = filtersSlice.actions;

export default filtersSlice.reducer;
