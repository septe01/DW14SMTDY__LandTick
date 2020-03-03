import axios from "axios";

import { API } from "../config/api";
import { appContants } from "../config/AppConstants";

export const getSpecies = spesies => {
  try {
    return {
      type: appContants.GET_SPECIES,
      payload: axios({
        method: "GET",
        url: `${API.baseURL}/species`
      })
    };
  } catch (error) {
    console.log(error);
  }
};
