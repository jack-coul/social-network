import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../configureStore";
import { startState } from "../types/application";
import {
  ADD_FOLLOW,
  BLOCK_USER,
  EDIT_USER,
  ERRORS_USER,
  GET_ALL_USERS,
  GET_OTHER_USER,
  GET_USER,
  IUserAction,
  LOADING_USER,
  REMOVE_FOLLOW,
} from "../types/user";

export const getUser = () => {
  return async (dispatch: Dispatch<IUserAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.get(`http://localhost:4000/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        localStorage.setItem("id", res.data.id);

        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err.toString(),
        },
      });
    }
  };
};

export const getUserOne = (id: string) => {
  return async (
    dispatch: Dispatch<IUserAction>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });

    try {
      const res = await axios.get(`http://localhost:4000/user/one/${id}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({
          type: GET_OTHER_USER,
          payload: res.data.user,
        });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err.toString(),
        },
      });
    }
  };
};

export const editUser = (data: {}) => {
  return async (
    dispatch: Dispatch<IUserAction>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });

    try {
      const res = await axios.patch("http://localhost:4000/user", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: EDIT_USER, payload: res.data.avatar });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err.toString(),
        },
      });
    }
  };
};

export const blockUser = (id: string) => {
  return async (
    dispatch: Dispatch<IUserAction>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.delete(`http://localhost:4000/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: BLOCK_USER });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err.toString(),
        },
      });
    }
  };
};

export const addFollow = (id: string) => {
  return async (
    dispatch: Dispatch<IUserAction>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.patch("http://localhost:4000/add/freind", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: ADD_FOLLOW, payload: res.data });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err,
        },
      });
    }
  };
};

export const removeFollow = (id: string) => {
  return async (
    dispatch: Dispatch<IUserAction>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.patch("http://localhost:4000/remove/freind", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: REMOVE_FOLLOW, payload: res.data });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err,
        },
      });
    }
  };
};

export const getUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    dispatch({
      type: LOADING_USER,
      payload: {
        loaddingUser: true,
        errors: null,
      },
    });
    try {
      const res = await axios.get("http://localhost:4000/users");
      dispatch({
        type: LOADING_USER,
        payload: {
          loaddingUser: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_USER,
          payload: {
            loaddingUser: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: GET_ALL_USERS, payload: res.data });
      }
    } catch (err: any) {
      dispatch({
        type: ERRORS_USER,
        payload: {
          loaddingUser: false,
          errors: err.toString(),
        },
      });
    }
  };
};
