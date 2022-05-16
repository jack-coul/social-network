import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ERROR_POST,
  GET_ALL_POSTS,
  GET_MY_POSTS,
  GET_USER_POSTS,
  LOAD_POST,
} from "./../types/post";
import { Dispatch } from "react";
import { IPostAction } from "../types/post";
import axios from "axios";
import { RootState } from "../configureStore";

export const getPosts = () => {
  return async (dispatch: Dispatch<IPostAction>) => {
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    try {
      const res = await axios.get("http://localhost:4000/posts");
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const getMyPosts = () => {
  return async (dispatch: Dispatch<IPostAction>, getState: () => RootState) => {
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    const state = getState();
    const token = state.application.token;
    try {
      const res = await axios.get(`http://localhost:4000/my/posts/`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: GET_MY_POSTS, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const getUserPosts = (id: string, admin: any) => {
  return async (dispatch: Dispatch<IPostAction>) => {
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    try {
      const request = admin
        ? `http://localhost:4000/admin/posts/${id}`
        : `http://localhost:4000/user/posts/${id}`;
      const res = await axios(request);
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: GET_USER_POSTS, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const addPost = (data: any) => {
  return async (dispatch: Dispatch<IPostAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });

    try {
      const res = await axios.post("http://localhost:4000/post", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: ADD_POST, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const deletePost = (id: string) => {
  return async (dispatch: Dispatch<IPostAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    try {
      const res = await axios.delete(`http://localhost:4000/post/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.errors,
          },
        });
      } else {
        dispatch({ type: DELETE_POST, payload: id });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};

export const editPost = (id: string, data: any) => {
  return async (dispatch: Dispatch<IPostAction>, getState: () => RootState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({
      type: LOAD_POST,
      payload: {
        loadingPost: true,
        errors: null,
      },
    });
    try {
      const res = await axios.patch(`http://localhost:4000/post/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: LOAD_POST,
        payload: {
          loadingPost: false,
          errors: null,
        },
      });
      if (res.data.error) {
        dispatch({
          type: ERROR_POST,
          payload: {
            loadingPost: false,
            errors: res.data.error,
          },
        });
      } else {
        dispatch({ type: EDIT_POST, payload: res.data });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_POST,
        payload: {
          loadingPost: false,
          errors: error.toString(),
        },
      });
    }
  };
};
// export const addLike = (id) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const token = state.application.token;
//     dispatch({ type: "add/like/pending" });
//     try {
//       const res = await fetch(`http://localhost:4000/add/like/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-type": "application/json",
//           authorization: `Bearer ${token}`,
//         },
//       });

//       const post = await res.json();
//       if (post.error) {
//         dispatch({ type: "add/like/rejected", error: post.error });
//       } else {
//         dispatch({
//           type: "add/like/fulfilled",
//           payload: { post: post, user: state.application.id },
//         });
//       }
//     } catch (error) {
//       dispatch({ type: "add/like/rejected", error });
//     }
//   };
// };

// export const removeLike = (id) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const token = state.application.token;
//     dispatch({ type: "remove/like/pending" });
//     try {
//       const res = await fetch(`http://localhost:4000/remove/like/${id}`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-type": "application/json",
//         },
//       });

//       const post = await res.json();
//       if (post.error) {
//         dispatch({ type: "remove/like/rejected", error: post.error });
//       } else {
//         dispatch({
//           type: "remove/like/fulfilled",
//           payload: { post: post, user: state.application.id },
//         });
//       }
//     } catch (error) {
//       dispatch({ type: "remove/like/rejected", error });
//     }
//   };
// };
