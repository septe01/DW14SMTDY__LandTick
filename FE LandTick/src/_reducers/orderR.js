import { appContants } from "../config/AppConstants";

const initialState = {
  getOrder: [],
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

    default:
      return state;
  }
};

export default Order;
