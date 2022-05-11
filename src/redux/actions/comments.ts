import {
  LOADING_COMMENT,
  GET_COMMENTS,
  ERROR_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./../types/comments";
import { Dispatch } from "react";
import { IActionComment } from "../types/comments";
import axios from "axios";
import { startState } from "../types/application";

export const getComments = () => {
  return async (dispatch: Dispatch<IActionComment>) => {
    dispatch({
      type: LOADING_COMMENT,
      payload: {
        loadingComments: false,
        errors: null,
      },
    });
    try {
      const res = await axios.get("http://localhost:4000/comments");
      dispatch({
        type: LOADING_COMMENT,
        payload: {
          loadingComments: false,
        },
      });
      if (res.data.error) {
        dispatch({ type: ERROR_COMMENT, payload: res.data.error });
      } else {
        dispatch({ type: GET_COMMENTS, payload: res.data });
      }
    } catch (err: any) {
      dispatch({ type: ERROR_COMMENT, payload: err.toString() });
    }
  };
};

export const addComment = (text: string, id: string) => {
  return async (
    dispatch: Dispatch<IActionComment>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    dispatch({
      type: LOADING_COMMENT,
      payload: {
        loadingComments: true,
        errors: null,
      },
    });
    try {
      const res = await axios.post(`http://localhost:4000/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      dispatch({
        type: LOADING_COMMENT,
        payload: {
          loadingComments: false,
        },
      });
      dispatch({ type: ADD_COMMENT, payload: res.data });
    } catch (err: any) {
      dispatch({ type: ERROR_COMMENT, payload: err.toString() });
    }
  };
};

export const deleteComment = (id: string, role: string) => {
  return async (
    dispatch: Dispatch<IActionComment>,
    getState: () => startState
  ) => {
    const state = getState();
    const token = state.token;
    try {
      dispatch({
        type: LOADING_COMMENT,
        payload: {
          loadingComments: true,
          errors: null,
        },
      });

      const request =
        role === "admin"
          ? `http://localhost:4000/admin/comment/${id}`
          : `http://localhost:4000/comment/${id}`;
      const res = await axios.delete(request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOADING_COMMENT,
        payload: {
          loadingComments: false,
        },
      });
      dispatch({ type: DELETE_COMMENT, payload: id });
    } catch (err: any) {
      dispatch({
        type: ERROR_COMMENT,
        payload: {
          loadingComments: false,
          errors: err.toString(),
        },
      });
    }
  };
};
