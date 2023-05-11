import {
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_RESET,
} from "../constants/authConstants";

const loginReducer = (
  state = { loading: false, error: "", user: {} },
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

const registerReducer = (state = { loading: false, error: "", user: {} }) => {};

const forgotPassordReducer = (
  state = { loading: false, error: "", user: {} }
) => {};

export { loginReducer, registerReducer, forgotPassordReducer };
