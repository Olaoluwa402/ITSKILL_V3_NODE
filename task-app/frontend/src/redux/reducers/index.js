import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export { rootReducer };
