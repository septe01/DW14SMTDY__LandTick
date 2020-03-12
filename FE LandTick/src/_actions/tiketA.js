import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const storeTiket = data => {
  try {
    const token = window.localStorage.getItem("token");
    return {
      type: "POST_TICKET",
      payload: Axios({
        method: "POST",
        url: `${API.baseURL}/ticket`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTiket = () => {
  console.log("getALL");
  try {
    return {
      type: appContants.GET_TICKET,
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/ticket`
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTiketByID = id => {
  console.log(id);
  try {
    return {
      type: appContants.GETTIKET,
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/ticket${id}`
      })
    };
  } catch (error) {
    console.log(error);
  }
};
