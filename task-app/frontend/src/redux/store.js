import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const middleware = [thunk];
const p =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));
//create store
const store = createStore(rootReducer, p);

export { store };

//packages : redux, react-redux, redux-devtools-extension,

//import necessary functions for creating store
