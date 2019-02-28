import { createStore, combineReducers, applyMiddleware } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import APIreducer from "../redux/reducers.js";

let reducers = combineReducers({
  data: APIreducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;