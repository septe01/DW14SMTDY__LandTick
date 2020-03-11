import { combineReducers, createStore, applyMiddleware } from "redux";

import { promise, logger } from "./middleware";

//reducers

import { userLogin, get_User } from "../_reducers/userR";
import tiketR from "../_reducers/tiketR";
import trainsR from "../_reducers/trainsR";
import {
  Order,
  getOrder,
  addOrder,
  updateOrder,
  orderKu
} from "../_reducers/orderR";

const reducers = combineReducers({
  userLogin,
  get_User,
  tiketR,
  trainsR,
  Order,
  addOrder,
  getOrder,
  orderKu,
  updateOrder
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
