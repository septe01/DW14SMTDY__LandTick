import { appContants } from "../config/AppConstants";

const initialState = {
  getOrder: [],
  getOrderById: [],
  updateOrder: [],
  isLoading: false,
  isError: false
};

const Order = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_ORDER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_ORDER_FULFILLED:
      return {
        ...state,
        getOrder: action.payload,
        isLoading: false
      };
    case appContants.GET_ORDER_REJECTED:
      return {
        ...state,
        isError: true
      };
    // byId
    case appContants.GET_ORDER_BY_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_ORDER_BY_FULFILLED:
      return {
        ...state,
        getOrderById: action.payload,
        isLoading: false
      };
    case appContants.GET_ORDER_BY_REJECTED:
      return {
        ...state,
        isError: true
      };
    // update
    case appContants.UPDATE_ORDER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.UPDATE_ORDER_FULFILLED:
      return {
        ...state,
        updateOrder: action.payload,
        isLoading: false
      };
    case appContants.UPDATE_ORDER_REJECTED:
      return {
        ...state,
        isError: true
      };

    default:
      return state;
  }
};

export default Order;
