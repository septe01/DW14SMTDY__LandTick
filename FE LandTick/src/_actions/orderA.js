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

export const myOrder = () => {
  try {
    const token = window.localStorage.getItem("token");
    return {
      type: appContants.MY_ORDER,
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/my_tickets`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateOreder = (id, data) => {
  try {
    const token = window.localStorage.getItem("token");
    return {
      type: appContants.UPDATE_ORDER,
      payload: Axios({
        method: "PATCH",
        url: `${API.baseURL}/order/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
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
  const token = window.localStorage.getItem("token");
  return {
    type: "POST_ORDER",
    payload: Axios({
      method: "POST",
      url: `${API.baseURL}/order`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    })
  };
};
