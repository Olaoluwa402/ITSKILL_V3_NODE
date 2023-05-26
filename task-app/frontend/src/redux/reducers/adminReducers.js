import {
  ADMIN_GETUSERS_INIT,
  ADMIN_GETUSERS_SUCCESS,
  ADMIN_GETUSERS_FAILED,
  ADMIN_GETUSERS_RESET,
} from "../constants/adminContants";

const getUsersAdminReducer = (
  state = {
    loading: false,
    error: "",
    users: [],
  },
  action
) => {
  switch (action.type) {
    case ADMIN_GETUSERS_INIT:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_GETUSERS_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload.data,
      };
    case ADMIN_GETUSERS_RESET:
      return {};
    case ADMIN_GETUSERS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getUsersAdminReducer };
