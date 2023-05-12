import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export { rootReducer };
