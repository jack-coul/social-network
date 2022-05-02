import {
  actionApplication,
  applicationState,
  applicationTypes,
  LOGIN_USER,
  REGISTER_USER,
  startState,
} from "../../types/application";

const initialState: startState = {
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  firstname: "",
  lastname: "",
  loading: false,
  error: null,
};

const application = (state = initialState, action: actionApplication) => {
  switch (action.type) {
    case applicationTypes.REGISTER_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        loading: false,
      };
    }
    case applicationTypes.REGISTER_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case applicationTypes.SIGNIN_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    }
    case applicationTypes.SIGNIN_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.error,
        message: action.payload,
      };
    }
    case "user/get/pending":
      return {
        ...state,
        loading: true,
      };
    case "user/get/fullfilled":
      return {
        ...state,
        userINF: [...state.userINF, action.payload.user],
        user: action.payload,
        id: action.payload._id,
        loading: false,
      };
    case "user/get/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "user/one/get/pending":
      return {
        ...state,
        loading: true,
      };
    case "user/one/get/fullfilled":
      return {
        ...state,
        searchUser: action.payload,
        loading: false,
      };
    case "user/one/get/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "get/users/pending":
      return {
        ...state,
        loading: true,
      };
    case "get/users/fulfilled":
      return {
        ...state,
        users: [...action.payload],
      };
    case "get/users/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "edit/user/pending":
      return {
        ...state,
        loading: true,
      };
    case "edit/user/fullfilled":
      return {
        ...state,
        image: action.payload,
      };
    case "edit/user/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "exitUser":
      return {
        ...state,
        userINF: [],
        users: [],
        token: localStorage.removeItem("token"),
        id: localStorage.removeItem("id"),
        firstname: "",
        lastname: "",
        image: "",
        error: null,
      };
    case "add/follow/pending":
      return {
        ...state,
        adding: true,
        error: null,
      };
    case "add/follow/fulfilled":
      return {
        ...state,
        user: action.payload,
        adding: false,
      };
    case "add/follow/rejected":
      return {
        ...state,
        adding: false,
        error: action.error,
      };
    case "remove/follow/pending":
      return {
        ...state,
        adding: true,
        error: null,
      };
    case "remove/follow/fulfilled":
      return {
        ...state,
        user: action.payload,
        adding: false,
      };
    case "remove/follow/rejected":
      return {
        ...state,
        adding: false,
        error: action.payload,
      };
    case "blocked":
      return {
        ...state,
        block: true,
      };
    case "unblocked":
      return {
        ...state,
        block: false,
      };
    default:
      return state;
  }
};



export const getUser = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "user/get/pending" });
    try {
      const data = await fetch(`http://localhost:4000/user`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const user = await data.json();
      if (user.error) {
        dispatch({ type: "user/get/rejected", error: user.error });
      } else {
        localStorage.setItem("id", user.id);

        dispatch({
          type: "user/get/fullfilled",
          payload: user,
        });
      }
    } catch (err) {
      dispatch({ type: "user/get/rejected", error: err.toString() });
    }
  };
};

export const getUserOne = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "user/one/get/pending" });

    try {
      const data = await fetch(`http://localhost:4000/user/one/${id}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const user = await data.json();
      if (user.error) {
        dispatch({ type: "user/one/get/rejected", error: user.error });
      } else {
        dispatch({
          type: "user/one/get/fullfilled",
          payload: user.user,
        });
      }
    } catch (err) {
      dispatch({ type: "user/one/get/rejected", error: err.toString() });
    }
  };
};

export const editUser = (img, firstname, lastname, login) => {
  return async (dispatch, getState) => {
    dispatch({ type: "edit/user/pending" });
    const state = getState();
    const token = state.application.token;
    let formData = new FormData();
    img && formData.append("image", img);
    firstname && formData.append("firstname", firstname);
    lastname && formData.append("lastname", lastname);
    login && formData.append("login", login);
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const image = await res.json();

      if (image.error) {
        dispatch({ type: "edit/user/rejected", error: image.error });
      } else {
        dispatch({ type: "edit/user/fulfilled", payload: image.avatar });
      }
    } catch (error) {
      dispatch({ type: "edit/user/rejected", error });
    }
  };
};

export const addFollow = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "add/follow/pending" });
    try {
      const res = await fetch("http://localhost:4000/add/freind", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      const message = await res.json();
      if (message.error) {
        dispatch({ type: "add/follow/rejected", error: message.error });
      } else {
        dispatch({ type: "add/follow/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "add/follow/rejected", error });
    }
  };
};

export const blockUser = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "block/user/pending" });
    try {
      const res = await fetch(`http://localhost:4000/admin/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const message = await res.json();
      if (message.error) {
        dispatch({ type: "block/user/rejected", error: message.error });
      } else {
        dispatch({ type: "block/user/fulfilled" });
      }
    } catch (error) {
      dispatch({ type: "block/user/rejected", error: error.toString() });
    }
  };
};

export const removeFollow = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "remove/follow/pending" });
    try {
      const res = await fetch("http://localhost:4000/remove/freind", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      const message = await res.json();
      if (message.error) {
        dispatch({ type: "remove/follow/rejected", error: message.error });
      } else {
        dispatch({ type: "remove/follow/fulfilled", payload: message });
      }
    } catch (error) {
      dispatch({ type: "remove/follow/rejected", error });
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "get/users/pending" });
    try {
      const res = await fetch("http://localhost:4000/users");
      const users = await res.json();

      if (users.error) {
        dispatch({ type: "get/users/rejected", error: users.error });
      } else {
        dispatch({ type: "get/users/fulfilled", payload: users });
      }
    } catch (error) {
      dispatch({ type: "get/users/rejected", error });
    }
  };
};

export default application;
