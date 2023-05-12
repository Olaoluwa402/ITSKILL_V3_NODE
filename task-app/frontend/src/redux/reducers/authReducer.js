import {
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_RESET,
  REGISTER_USER_INIT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_RESET,
} from "../constants/authConstants";

const userFromStore = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const loginReducer = (
  state = {
    loading: false,
    error: "",
    user: userFromStore && userFromStore.user ? userFromStore.user : null,
    access_token:
      userFromStore && userFromStore.access_token
        ? userFromStore.access_token
        : null,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_USER_INIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload.user,
        access_token: action.payload.access_token,
        status: action.payload.status,
      };
    case LOGIN_USER_RESET:
      return {};
    case LOGIN_USER_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const registerReducer = (
  state = {
    loading: false,
    error: "",
    user: null,
    access_token: null,
  },
  action
) => {
  switch (action.type) {
    case REGISTER_USER_INIT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload.user,
        access_token: action.payload.access_token,
        status: action.payload.status,
      };
    case REGISTER_USER_RESET:
      return {};
    case REGISTER_USER_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const forgotPassordReducer = (
  state = { loading: false, error: "", user: {} }
) => {};

export { loginReducer, registerReducer, forgotPassordReducer };
