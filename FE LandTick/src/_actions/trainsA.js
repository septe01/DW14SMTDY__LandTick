import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";

export const getTrain = () => {
  try {
    return {
      type: appContants.GET_TRAINS,
      payload: Axios({
        type: "GET",
        url: `${API.baseURL}/trains`
      })
    };
  } catch (error) {
    console.log(error);
  }
};
