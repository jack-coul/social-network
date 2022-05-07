import { Dispatch } from "react";
import axios from "axios";
import {
  actionApplication,
  ERRORS_APPLICATION,
  ISigninForm,
  LOADING_APPLICATION,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../types/application";
import { IRegisterForm } from "../../interfaces";

export const registerUser = (data: IRegisterForm) => {
  return async (dispatch: Dispatch<actionApplication>) => {
    dispatch({
      type: LOADING_APPLICATION,
      payload: {
        loadingSign: true,
        errors: null,
      },
    });

    try {
      const res = await axios.post("/user/signup", data);
      dispatch({
        type: LOADING_APPLICATION,
        payload: {
          loadingSign: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_APPLICATION,
          payload: {
            errors: res.data.error,
            loadingSign: false,
          },
        });
      } else {
        dispatch({ type: REGISTER_USER });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_APPLICATION,
        payload: {
          errors: err.toString(),
          loadingSign: false,
        },
      });
    }
  };
};

export const loginUser = (data: ISigninForm) => {
  return async (dispatch: Dispatch<actionApplication>) => {
    dispatch({
      type: LOADING_APPLICATION,
      payload: {
        loadingSign: true,
        errors: null,
      },
    });
    try {
      const res = await axios.post("/user/signin", data);
      dispatch({
        type: LOADING_APPLICATION,
        payload: {
          loadingSign: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_APPLICATION,
          payload: {
            errors: res.data.error,
            loadingSign: false,
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
        localStorage.setItem("id", res.data.id);
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_APPLICATION,
        payload: {
          errors: err.toString(),
          loadingSign: false,
        },
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<actionApplication>) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      dispatch({ type: LOGOUT_USER });
    } catch (err: any) {
      dispatch({
        type: ERRORS_APPLICATION,
        payload: {
          loadingSign: false,
          errors: err.toString(),
        },
      });
    }
  };
};
