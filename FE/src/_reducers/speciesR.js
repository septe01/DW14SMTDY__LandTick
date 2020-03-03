import { appContants } from "../config/AppConstants";

const initialState = {
  indexSpecies: [],
  isLoading: false,
  isError: false
};

const species = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_SPECIES_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_SPECIES_FULFILLED:
      return {
        ...state,
        indexSpecies: action.payload.data,
        isLoading: false
      };
    case appContants.GET_SPECIES_REJECTED:
      return {
        indexSpecies: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default species;
