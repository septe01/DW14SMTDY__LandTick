import { appContants } from "../config/AppConstants";

const initialState = {
  getOrder: [],
  getOrderById: [],
  updateOrder: [],
  postOrder: [],
  myOrder: [],
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

// myOrder
export const orderKu = (state = initialState, action) => {
  switch (action.type) {
    case appContants.MY_ORDER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.MY_ORDER_FULFILLED:
      return {
        ...state,
        myOrder: action.payload.data,
        isLoading: false
      };
    case appContants.MY_ORDER_REJECTED:
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
      console.log("asas", action.payload);
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

// get byId
export const getOrder = (state = initialState, action) => {
  switch (action.type) {
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

// export const updateOrder = (state = initialState, action) => {
//   switch (action.type) {
//     // update
//     case appContants.UPDATE_ORDER_PENDING:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case appContants.UPDATE_ORDER_FULFILLED:
//       console.log("order :", action.payload.data);
//       return {
//         ...state,
//         updateOrder: action.payload,
//         isLoading: false
//       };
//     case appContants.UPDATE_ORDER_REJECTED:
//       return {
//         ...state,
//         isError: true
//       };

//     default:
//       return state;
//   }
// };
