import { appContants } from "../config/AppConstants";

const initialState = {
  indexAge: [],
  isLoading: false,
  isError: false
};

const age = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_AGE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_AGE_FULFILLED:
      return {
        ...state,
        indexAge: action.payload,
        isLoading: false
      };
    case appContants.GET_AGE_REJECTED:
      return {
        indexAge: action.payload,
        isLoading: true
      };
    default:
      return state;
  }
};

export default age;
