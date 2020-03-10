import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const getOreder = () => {
  try {
    return {
      type: appContants.GET_ORDER,
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/order`,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateOreder = (id, data) => {
  console.log("dari action ::" + id, data);
  try {
    return {
      type: appContants.UPDATE_ORDER,
      payload: Axios({
        method: "PATCH",
        url: `${API.baseURL}/order/${id}`,
        headers: API.headers,
        data: data
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
        method: "GET",
        url: `${API.baseURL}/order/${id}`,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = data => {
  try {
    return {
      type: appContants.POST_ORDER,
      payload: Axios({
        method: "POST",
        url: `${API.baseURL}/order`,
        headers: API.headers,
        data: data
      })
    };
  } catch (error) {
    console.log(error);
  }
};
