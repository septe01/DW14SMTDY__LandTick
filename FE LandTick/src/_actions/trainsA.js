import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const getTrain = () => {
  try {
    const token = window.localStorage.getItem("token");
    return {
      type: appContants.GET_TRAINS,
      payload: Axios({
        type: "GET",
        url: `${API.baseURL}/trains`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    };
  } catch (error) {
    console.log(error);
  }
};
