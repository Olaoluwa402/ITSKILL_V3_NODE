import {
  ADMIN_GETUSERS_INIT,
  ADMIN_GETUSERS_SUCCESS,
  ADMIN_GETUSERS_FAILED,
} from "../constants/adminContants";
import axios from "axios";
import { logout } from "./authActions";

// import { BASE_API_URL } from "../../config";
const getUsersAdminAction = () => {
  return async (dispatch, getStore) => {
    console.log(getStore(), "getStore");
    const { login } = getStore();
    try {
      //1.  dispatch type INIT
      dispatch({
        type: ADMIN_GETUSERS_INIT,
      });

      //2. make api call
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${login.access_token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/admin/users`, config);

      //3. dispatch succees type
      dispatch({
        type: ADMIN_GETUSERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error, "error");
      //4. dispacth failed type
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      if (message.includes("jwt")) {
        logout();
      }

      dispatch({
        type: ADMIN_GETUSERS_FAILED,
        payload: message,
      });
    }
  };
};

export { getUsersAdminAction };
