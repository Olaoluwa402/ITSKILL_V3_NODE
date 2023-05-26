import {
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_INIT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../constants/authConstants";
import axios from "axios";

// import { BASE_API_URL } from "../../config";
const loginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      //1.  dispatch type INIT
      dispatch({
        type: LOGIN_USER_INIT,
      });

      //2. make api call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/v1/auth/login`,
        { email, password },
        config
      );

      //3. dispatch succees type
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });

      //save user to storage
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error, "error");
      //4. dispacth failed type
      dispatch({
        type: LOGIN_USER_FAILED,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    //remove the stored user
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
    });
  };
};

const registerAction = ({ email, password, repeat_password, name }) => {
  return async (dispatch) => {
    try {
      //1.  dispatch type INIT
      dispatch({
        type: REGISTER_USER_INIT,
      });

      //2. make api call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/v1/auth/register`,
        { email, password, repeat_password, name },
        config
      );

      //3. dispatch succees type
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });

      //save user to storage
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error, "error");
      //4. dispacth failed type
      dispatch({
        type: REGISTER_USER_FAILED,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };
};

export { loginAction, registerAction };
