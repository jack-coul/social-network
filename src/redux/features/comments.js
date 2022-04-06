const inintialState = {
  comments: [],
  error: null,
};

const comments = (state = inintialState, action) => {
  switch (action.type) {
    case "get/comments/pending":
      return {
        ...state,
        loadingComments: true,
        error: null,
      };
    case "get/comments/fullfilled":
      return {
        ...state,
        comments: [...action.payload],
        loadingComments: false,
      };
    case "get/comments/rejected":
      return {
        ...state,
        loadingComments: false,
        error: action.error,
      };
    case "post/comment/fullfilled":
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loadingPostComments: false,
      };
    case "post/comment/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "delete/comment/pending":
      return {
        ...state,
        loadingDeleteComments: true,
      };
    case "delete/comment/fullfilled":
      return {
        ...state,
        comments: [
          ...state.comments.filter((comment) => {
            return comment._id !== action.payload;
          }),
        ],
        loadingDeleteComments: false,
      };
    case "delete/comment/rejected":
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default comments;

export const getComments = () => {
  return async (dispatch) => {
    dispatch({ type: "get/comments/pending" });
    try {
      const res = await fetch("http://localhost:4000/comments");
      const data = await res.json();
      if (data.error) {
        dispatch({ type: "get/comments/rejected", error: data.error });
      } else {
        dispatch({ type: "get/comments/fullfilled", payload: data });
      }
    } catch (err) {
      dispatch({ type: "get/comments/rejected", error: err.toString() });
    }
  };
};

export const addComment = (text, id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "post/comment/pending" });
    try {
      const res = await fetch(`http://localhost:4000/comment/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      dispatch({ type: "post/comment/fullfilled", payload: data });
    } catch (err) {
      dispatch({ type: "post/comment/rejected", error: err.toString() });
    }
  };
};

export const deleteComment = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "delete/comment/pending" });
    try {
      const res = await fetch(`http://localhost:4000/comment/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
      });
      const data = res.json();
      dispatch({ type: "delete/comment/fullfilled", payload: id });
    } catch (err) {
      dispatch({ type: "delete/comment/rejected", error: err.toString() });
    }
  };
};
