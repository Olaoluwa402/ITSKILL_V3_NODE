import { combineReducers } from "redux";
import {
  loginReducer,
  registerReducer,
  getUsersAdminReducer,
} from "./reducers";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  users_admin: getUsersAdminReducer,
});

export { rootReducer };
