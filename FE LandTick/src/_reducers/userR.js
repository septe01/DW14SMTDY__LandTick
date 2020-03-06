import { appContants } from "../config/AppConstants";

const initialState = {
  datauserLogin: [],
  loginLoading: false,
  loginError: false,
  dataLogin: []
};

const userLogin = (state = initialState, action) => {
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
        dataLogin: [...state.dataLogin, action.payload],
        loginLoading: false
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

export default userLogin;
