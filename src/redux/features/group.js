const initialState = {
  loadGroup: false,
  groups: [],
  error: null,
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case "get/groups/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "get/groups/fulfilled":
      return {
        ...state,
        loadGroup: false,
        groups: [...action.payload],
      };
    case "get/groups/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    case "add/group/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "add/group/fulfilled":
      return {
        ...state,
        loadGroup: false,
        groups: [...state.groups, action.payload],
      };
    case "add/group/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    case "delete/group/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "delete/group/fulfilled":
      return {
        ...state,
        loadGroup: false,
        message: action.payload,
      };
    case "delete/group/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    case "edit/group/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "edit/group/fulfilled":
      return {
        ...state,
        loadGroup: false,
        message: action.payload,
      };
    case "edit/group/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    case "add/user/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "add/user/fulfilled":
      return {
        ...state,
        loadGroup: false,
        message: action.payload,
      };
    case "add/user/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    case "remove/user/pending":
      return {
        ...state,
        loadGroup: true,
        error: null,
      };
    case "remove/user/fulfilled":
      return {
        ...state,
        loadGroup: false,
        message: action.payload,
      };
    case "remove/user/rejected":
      return {
        ...state,
        loadGroup: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getGroups = () => {
  return async (dispatch) => {
    dispatch({ type: "get/groups/pending" });
    try {
      const res = await fetch("http://localhost:4000/groups");
      const groups = await res.json();

      if (groups.error) {
        dispatch({ type: "get/groups/rejected", error: groups.error });
      } else {
        dispatch({ type: "get/groups/fulfilled", payload: groups });
      }
    } catch (error) {
      dispatch({ type: "get/groups/rejected", error });
    }
  };
};

export const addGroup = (name, desc) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/group/pending" });
    try {
      const res = await fetch("http://localhost:4000/group", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, desc }),
      });
      const group = await res.json();

      if (group.error) {
        dispatch({ type: "add/group/rejected", error: group.error });
      } else {
        dispatch({ type: "add/group/fulfilled", payload: group });
      }
    } catch (error) {
      dispatch({ type: "add/group/rejected", error });
    }
  };
};

export const deleteGroup = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "delete/group/pending" });
    try {
      const res = await fetch(`http://localhost:4000/group/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const message = await res.json();

      if (message.error) {
        dispatch({ type: "delete/group/rejected", error: message.error });
      } else {
        dispatch({ type: "delete/group/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "delete/group/rejected", error });
    }
  };
};

export const editGroup = (name, desc, id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "edit/group/pending" });
    try {
      const res = await fetch(`http://localhost:4000/group/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, desc }),
      });
      const message = await res.json();

      if (message.error) {
        dispatch({ type: "edit/group/rejected", error: message.error });
      } else {
        dispatch({ type: "edit/group/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "edit/group/rejected", error });
    }
  };
};

export const addUserInGroup = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/user/pending" });
    try {
      const res = await fetch(`http://localhost:4000/group/userAdd/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const message = await res.json();

      if (message.error) {
        dispatch({ type: "add/user/rejected", error: message.error });
      } else {
        dispatch({ type: "add/user/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "add/user/rejected", error });
    }
  };
};

export const removeUserInGroup = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "remove/user/pending" });
    try {
      const res = await fetch(`http://localhost:4000/group/userAdd/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const message = await res.json();

      if (message.error) {
        dispatch({ type: "remove/user/rejected", error: message.error });
      } else {
        dispatch({ type: "remove/user/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "remove/user/rejected", error });
    }
  };
};

export default groups;
