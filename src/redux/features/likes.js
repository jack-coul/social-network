const initialState = {
  loadingLikes: false,
  likes: [],
  error: null,
};

const likes = (state = initialState, action) => {
  switch (action.type) {
    case "add/like/pending":
      return {
        ...state,
        loadingLikes: true,
        error: null,
      };
    case "add/like/fulfilled":
      return {
        ...state,
        loadingLikes: false,
        likes: [...action.payload],
        message: "Успешное добавление",
      };
    case "add/like/rejected":
      return {
        ...state,
        loadingLikes: false,
        error: action.error,
      };
    case "remove/like/pending":
      return {
        ...state,
        loadingLikes: true,
        error: null,
      };
    case "remove/like/fulfilled":
      return {
        ...state,
        loadingLikes: false,
        likes: [...action.payload],
        message: "Успешное удаление",
      };
    case "remove/like/rejected":
      return {
        ...state,
        loadingLikes: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const addLike = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/like/pending" });
    try {
      const res = await fetch(`http://localhost:4000/add/like/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const post = await res.json();

      if (post.error) {
        dispatch({ type: "add/like/rejected", error: post.error });
      } else {
        dispatch({ type: "add/like/fulfilled", payload: post.likes });
      }
    } catch (error) {
      dispatch({ type: "add/like/rejected", error });
    }
  };
};

export const removeLike = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "remove/like/pending" });
    try {
      const res = await fetch(`http://localhost:4000/remove/like/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const post = await res.json();

      if (post.error) {
        dispatch({ type: "remove/like/rejected", error: post.error });
      } else {
        dispatch({ type: "remove/like/fulfilled", payload: post.likes });
      }
    } catch (error) {
      dispatch({ type: "remove/like/rejected", error });
    }
  };
};


export default likes;
