import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const storeTiket = data => {
  try {
    return {
      type: appContants.POST_TICKET,
      payload: Axios({
        method: "POST",
        url: `${API.baseURL}/ticket`,
        data: data,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTiket = () => {
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
