import {
  LOAD_LIKES,
  ERRORS_LIKES,
  ADD_LIKE,
  REMOVE_LIKE,
} from "./../types/likes";
import { Dispatch } from "react";
import { RootState } from "../configureStore";
import { ILikeAction } from "../types/likes";
import axios from "axios";

export const addLike = (id: string) => {
  return async (dispatch: Dispatch<ILikeAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_LIKES,
      payload: {
        loadingLike: true,
        errors: null,
      },
    });
    try {
      const res = await axios.patch(`http://localhost:4000/add/like/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_LIKES,
        payload: {
          loadingLike: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_LIKES,
          payload: {
            loadingLike: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: ADD_LIKE, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERRORS_LIKES,
        payload: {
          loadingLike: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const removeLike = (id: string) => {
  return async (dispatch: Dispatch<ILikeAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_LIKES,
      payload: {
        loadingLike: true,
        errors: null,
      },
    });
    try {
      const res = await axios.patch(`http://localhost:4000/remove/like/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_LIKES,
        payload: {
          loadingLike: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERRORS_LIKES,
          payload: {
            loadingLike: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: REMOVE_LIKE, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERRORS_LIKES,
        payload: {
          loadingLike: false,
          errors: error.toString(),
        },
      });
    }
  };
};
