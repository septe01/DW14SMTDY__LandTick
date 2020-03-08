import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const getOreder = () => {
  try {
    return {
      type: appContants.GET_ORDER,
      payload: Axios({
        type: "GET",
        url: `${API.baseURL}/order`,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};
export const getOrederById = id => {
  try {
    return {
      type: appContants.GET_ORDER_BY,
      payload: Axios({
        type: "GET",
        url: `${API.baseURL}/order/${id}`,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};
