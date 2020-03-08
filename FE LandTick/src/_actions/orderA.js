import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const getOreder = id => {
  let url;
  if (id) {
    url = `${API.baseURL}/order/id`;
  } else {
    url = `${API.baseURL}/order`;
  }
  try {
    return {
      type: appContants.GET_ORDER,
      payload: Axios({
        type: "GET",
        url: url,
        headers: API.headers
      })
    };
  } catch (error) {
    console.log(error);
  }
};
