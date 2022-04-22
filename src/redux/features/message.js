const initialState = {
  message: [],
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case "message/post/pending":
      return {
        ...state,
        loadingMessage: true,
        error: null,
      };
    case "message/post/fullfilled":
      return {
        ...state,
        message: [...state.message, action.payload],
        loadingMessage: false,
      };
    case "message/post/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "message/get/pending":
      return {
        ...state,
        loadingMessage: true,
        error: null,
      };
    case "message/get/fullfilled":
      return {
        ...state,
        message: [...action.payload],
        loadingMessage: false,
      };
    case "message/get/rejected":
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

export default message;

export const postMessages = (conversationId, text) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "message/post/pending" });
    try {
      const data = await fetch("http://localhost:4000/message", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ conversationId, text }),
      });

      const message = await data.json();
      dispatch({ type: "message/post/fullfilled", payload: message });
    } catch (err) {
      dispatch({ type: "message/post/rejected", error: err.toString() });
    }
  };
};

export const getMessage = (id) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "message/get/pending" });
    try {
      const data = await fetch(`http://localhost:4000/message/${id}`, {
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json",
        },
      });
      const message = await data.json();
      dispatch({ type: "message/get/fullfilled", payload: message });
    } catch (err) {
      dispatch({ type: "message/get/rejected", error: err.toString() });
    }
  };
};
