import { appContants } from "../config/AppConstants";

const initialState = {
  getTiket: [],
  storeTiket: [],
  isLoading: false,
  isError: false
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_TICKET_FULFILLED:
      return {
        ...state,
        getTiket: action.payload.data,
        isLoading: false
      };
    case appContants.GET_TICKET_REJECTED:
      return {
        ...state,
        getTiket: action.payload.data,
        isError: true
      };
    // appContants.POST_TICKET
    case appContants.POST_TICKET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.POST_TICKET_FULFILLED:
      return {
        ...state,
        storeTiket: action.payload,
        isLoading: false
      };
    case appContants.POST_TICKET_REJECTED:
      return {
        ...state,
        storeTiket: action.payload,
        isError: true
      };
    default:
      return state;
  }
};

export default ticket;
