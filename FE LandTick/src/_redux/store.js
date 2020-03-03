import { combineReducers, createStore, applyMiddleware } from "redux";

import { promise, logger } from "./middleware";

//reducers
import speciesR from "../_reducers/speciesR";
import ageR from "../_reducers/ageR";

const reducers = combineReducers({
  speciesR,
  ageR
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
