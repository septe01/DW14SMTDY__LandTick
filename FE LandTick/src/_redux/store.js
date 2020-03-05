import { combineReducers, createStore, applyMiddleware } from "redux";

import { promise, logger } from "./middleware";

//reducers

import userR from "../_reducers/userR";

const reducers = combineReducers({
  userR
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
