const initialState = {
  message: [],
};

const message = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default message;

export const postMessage = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "message/post/pending" });
    try {
      const data = await fetch("http://localhost:4000/conversation", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.user.token.id}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const message = await data.json();
      dispatch({ type: "message/post/fullfilled", payload: message });
    } catch (err) {
      dispatch({ type: "message/post/rejected", error: err.toString() });
    }
  };
};

export const getMessage = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "message/post/pending" });
    try {
      const data = await fetch("http://localhost:4000/conversation", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.user.token.id}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const message = await data.json();
      dispatch({ type: "message/post/fullfilled", payload: message });
    } catch (err) {
      dispatch({ type: "message/post/rejected", error: err.toString() });
    }
  };
};
