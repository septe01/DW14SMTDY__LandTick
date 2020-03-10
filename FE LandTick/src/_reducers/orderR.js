import { appContants } from "../config/AppConstants";

const initialState = {
  getOrder: [],
  getOrderById: [],
  updateOrder: [],
  postOrder: [],
  isLoading: false,
  isError: false
};

export const Order = (state = initialState, action) => {
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

// add order
export const addOrder = (state = initialState, action) => {
  switch (action.type) {
    case appContants.POST_ORDER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.POST_ORDER_FULFILLED:
      console.log(action.payload);
      return {
        ...state,
        postOrder: action.payload,
        isLoading: false
      };
    case appContants.POST_ORDER_REJECTED:
      return {
        ...state,
        postOrder: action.payload,
        isError: true
      };

    default:
      return state;
  }
};

// get Order
export const getOrder = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

// patch
export const updateOrder = (state = initialState, action) => {
  switch (action.type) {
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
