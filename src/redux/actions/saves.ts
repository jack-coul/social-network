import {
  ERROR_SAVES,
  GET_SAVES,
  ISavesAction,
  LOAD_SAVES,
} from "./../types/saves";
import { RootState } from "./../configureStore";
import { Dispatch } from "react";
import axios from "axios";

export const getSaves = () => {
  return async (
    dispatch: Dispatch<ISavesAction>,
    getState: () => RootState
  ) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_SAVES,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    try {
      const res = await axios.get(`http://localhost:4000/saves`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_SAVES,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_SAVES,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: GET_SAVES, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_SAVES,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};
