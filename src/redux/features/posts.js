const initialState = {
  loadingPosts: false,
  posts: [],
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "get/posts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "get/posts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.payload],
      };
    case "get/posts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "get/userPosts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "get/userPosts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.payload],
      };
    case "get/userPosts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "add/posts/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "add/posts/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        posts: [...state.posts, action.payload],
      };
    case "add/posts/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "delete/post/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "delete/post/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        message: "Успешное удаление",
      };
    case "delete/post/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    case "edit/post/pending":
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case "edit/post/fulfilled":
      return {
        ...state,
        loadingPosts: false,
        message: "Успешное изменение",
      };
    case "edit/post/rejected":
      return {
        ...state,
        loadingPosts: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "get/posts/pending" });
    try {
      const res = await fetch("http://localhost:4000/posts");
      const posts = await res.json();
      if (posts.error) {
        dispatch({ type: "get/posts/rejected", error: posts.error });
      } else {
        dispatch({ type: "get/posts/fulfilled", payload: posts });
      }
      
    } catch (error) {
      dispatch({ type: "get/posts/rejected", error });
    }
  };
};

export const getUserPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "get/userPosts/pending" });
    const state = getState();
    const token = state.application.token;
    try {
      const res = await fetch("http://localhost:4000/user/posts", {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const posts = await res.json();
      if (posts.error) {
        dispatch({ type: "get/userPosts/rejected", error: posts.error });
      } else {
        dispatch({ type: "get/userPosts/fulfilled", payload: posts });
      }
    } catch (error) {
      dispatch({ type: "get/userPosts/rejected", error });
    }
  };
};

export const addPost = (text, img) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    let formData = new FormData();
    img && formData.append("image", img);
    text && formData.append("text", text);
    dispatch({ type: "add/post/pending" });

    try {
      const res = await fetch("http://localhost:4000/post", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const addedPost = await res.json();

      if (addedPost.error) {
        dispatch({ type: "add/posts/rejected", error: addedPost.error });
      } else {
        dispatch({ type: "add/posts/fulfilled", payload: addedPost });
      }
    } catch (error) {
      dispatch({ type: "add/posts/rejected", error });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "delete/post/pending" });
    try {
      const res = await fetch(`http://localhost:4000/post${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const error = await res.json();
      if (error.error) {
        dispatch({ type: "add/posts/rejected", error: error.error });
      } else {
        dispatch({ type: "add/posts/fulfilled" });
      }
    } catch (error) {
      dispatch({ type: "add/posts/rejected", error });
    }
  };
};

export const editPost = (id, text) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "edit/post/pending" });
    try {
      const res = await fetch(`http://localhost:4000/post${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const error = await res.json();

      if (error.error) {
        dispatch({ type: "add/posts/rejected", error: error.error });
      } else {
        dispatch({ type: "add/posts/fulfilled" });
      }
    } catch (error) {
      dispatch({ type: "add/posts/rejected", error });
    }
  };
};

export default posts;
