import { combineReducers, createStore, applyMiddleware } from "redux";

import { promise, logger } from "./middleware";

//reducers

import userR from "../_reducers/userR";
import tiketR from "../_reducers/tiketR";
import trainsR from "../_reducers/trainsR";
import orderR from "../_reducers/orderR";

const reducers = combineReducers({
  userR,
  tiketR,
  trainsR,
  orderR
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
