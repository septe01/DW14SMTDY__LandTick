import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const login = data => {
  // console.log(data);
  try {
    return {
      type: appContants.POST_USER_LOGIN,
      payload: Axios({
        method: "POST",
        url: `${API.baseURL}/login`,
        data: data
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => {
  try {
    const token = window.localStorage.getItem("token");
    return {
      type: "GET_USER",
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/userAuth`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    };
  } catch (error) {
    console.log(error);
  }
};
