// import { appContants } from "../config/AppConstants";
import Axios from "axios";
import { API } from "../config/api";
import { appContants } from "../config/AppConstants";

export const getAge = () => {
  try {
    return {
      type: appContants.GET_AGE,
      payload: Axios({
        method: "GET",
        url: `${API.baseURL}/age`
      })
    };
  } catch (error) {
    console.log(error);
  }
};
