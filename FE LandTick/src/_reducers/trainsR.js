import { appContants } from "../config/AppConstants";

const initialState = {
  getTrains: [],
  isLoading: false,
  isError: false
};

const getTrains = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_TRAINS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_TRAINS_FULFILLED:
      return {
        ...state,
        getTrains: action.payload,
        isLoading: false
      };
    case appContants.GET_TRAINS_REJECTED:
      return {
        ...state,
        getTrains: action.payload,
        isError: true
      };
    default:
      return state;
  }
};

export default getTrains;
