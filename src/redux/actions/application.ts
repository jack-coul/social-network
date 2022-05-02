import { Dispatch } from "react";
import axios from "axios";
import {
  actionApplication,
  ERRORS_APPLICATION,
  LOADING_APPLICATION,
  LOGIN_USER,
  REGISTER_USER,
} from "../../types/application";

export const registerUser = (data: any) => {
  return async (dispatch: Dispatch<actionApplication>) => {
    dispatch({
      type: LOADING_APPLICATION,
      payload: {
        loadingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.post("http://localhost:4000/user/signup", data);
      dispatch({
        type: LOADING_APPLICATION,
        payload: {
          loadingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_APPLICATION,
          payload: {
            errors: res.data.error,
            loadingUser: false,
          },
        });
      } else {
        dispatch({ type: REGISTER_USER });
      }
    } catch (err) {
      dispatch({
        type: ERRORS_APPLICATION,
        payload: {
          errors: err.toString(),
          loadingUser: false,
        },
      });
    }
  };
};

export const loginUser = (data: any) => {
  return async (dispatch: Dispatch<actionApplication>) => {
    dispatch({
      type: LOADING_APPLICATION,
      payload: {
        loadingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.post("http://localhost:4000/user/signin", data);
      dispatch({
        type: LOADING_APPLICATION,
        payload: {
          loadingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_APPLICATION,
          payload: {
            errors: res.data.error,
            loadingUser: false,
          },
        });
      } else {
        dispatch({
          type: LOGIN_USER,
          payload: {
            token: res.data.token,
            id: res.data.id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
          },
        });
        localStorage.setItem("token", res.data.token);
      }
    } catch (err) {
      dispatch({
        type: ERRORS_APPLICATION,
        payload: {
          errors: err.toString(),
          loadingUser: false,
        },
      });
    }
  };
};
