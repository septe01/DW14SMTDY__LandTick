import { appContants } from "../config/AppConstants";

const initialState = {
  datauserLogin: [],
  loginLoading: false,
  loginError: false,
  getUser: []
};

export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case appContants.POST_USER_LOGIN_PENDING:
      return {
        ...state,
        loginLoading: true
      };
    case appContants.POST_USER_LOGIN_FULFILLED:
      return {
        ...state,
        datauserLogin: action.payload,
        loginLoading: false,
        loginError: false
      };
    case appContants.POST_USER_LOGIN_REJECTED:
      return {
        datauserLogin: action.payload.data,
        loginError: true
      };
    default:
      return state;
  }
};

export const get_User = (state = initialState, action) => {
  switch (action.type) {
    // get
    case appContants.GET_USER_PENDING:
      return {
        ...state,
        loginLoading: true
      };
    case appContants.GET_USER_FULFILLED:
      return {
        ...state,
        getUser: [...state.getUser, action.payload],
        loginLoading: false,
        loginError: false
      };
    case appContants.GET_USER_REJECTED:
      return {
        getUser: action.payload.data,
        loginError: true
      };
    default:
      return state;
  }
};
