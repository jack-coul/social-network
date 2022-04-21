const initialState = {
  loadingNotice: false,
  notification: [],
  error: null,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case "get/notification/pending":
      return {
        ...state,
        loadingNotice: true,
        error: null,
      };
    case "get/notification/fulfilled":
      return {
        ...state,
        loadingNotice: false,
        notification: [...action.payload],
      };
    case "get/notification/rejected":
      return {
        ...state,
        loadingNotice: false,
        error: action.error,
      };
    case "add/notification/pending":
      return {
        ...state,
        loadingNotice: true,
        error: null,
      };
    case "add/notification/fulfilled":
      return {
        ...state,
        loadingNotice: false,
        notification: [...state.notification, action.payload],
      };
    case "add/notification/rejected":
      return {
        ...state,
        loadingNotice: false,
        error: action.error,
      };
    case "delete/notification/pending":
      return {
        ...state,
        loadingNotice: true,
        error: null,
      };
    case "delete/notification/fulfilled":
      return {
        ...state,
        loadingNotice: false,
      };
    case "delete/notification/rejected":
      return {
        ...state,
        loadingNotice: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getNotification = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "get/notification/pending" });
    try {
      const res = await fetch("http://localhost:4000/notification", {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const notification = await res.json();

      if (notification.error) {
        dispatch({
          type: "get/notification/rejected",
          error: notification.error,
        });
      } else {
        dispatch({ type: "get/notification/fulfilled", payload: notification });
      }
    } catch (error) {
      dispatch({
        type: "get/notification/rejected",
        error,
      });
    }
  };
};

export const addNotification = (id, text) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/notification/pending" });
    try {
      const res = await fetch(`http://localhost:4000/notification${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });
      const notification = await res.json();
      if (notification.error) {
        dispatch({
          type: "add/notification/rejected",
          error: notification.error,
        });
      } else {
        dispatch({ type: "add/notification/fulfilled", payload: notification });
      }
    } catch (error) {
      dispatch({
        type: "add/notification/rejected",
        error,
      });
    }
  };
};

export const deleteNotification = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "delete/notification/pending" });
    try {
      const res = await fetch(`http://localhost:4000/notification${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const message = await res.json();
      if (message.error) {
        dispatch({
          type: "delete/notification/rejected",
          error: message.error,
        });
      } else {
        dispatch({ type: "delete/notification/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({
        type: "delete/notification/rejected",
        error,
      });
    }
  };
};

export default notification;
