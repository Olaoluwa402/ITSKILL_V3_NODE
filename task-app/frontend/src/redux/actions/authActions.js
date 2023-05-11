import {
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../constants/authConstants";
import axios from "axios";

import { BASE_API_URL } from "../../config";
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
    } catch (error) {
      console.log(error, "error");
      //4. dispacth failed type
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: error.message,
      });
    }
  };
};

export { loginAction };
