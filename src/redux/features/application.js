const initialState = {
  userINF: [],
  token: localStorage.getItem("token"),
  id: "",
  firstname: "",
  lastname: "",
  error: null,
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case "register/post/pending": {
      return {
        ...state,
        loading: true,
      };
    }
    case "register/post/fullfilled": {
      return {
        ...state,
        loading: false,
      };
    }
    case "register/post/rejected": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "login/post/pending": {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case "login/post/fullfilled": {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    }
    case "login/post/rejected": {
      return {
        ...state,
        error: action.error,
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
        userINF:action.payload,
        loading: false,
      };
    case "user/get/rejected":
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

export const registerUser = (
  firstname,
  lastname,
  login,
  email,
  password,
  passwordValid
) => {
  return async (dispatch) => {
    dispatch({ type: "register/post/pending" });
    try {
      await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          login,
          email,
          password,
          passwordValid,
        }),
      });
      dispatch({ type: "register/post/fullfilled" });
    } catch (err) {
      dispatch({ type: "register/post/rejected", error: err.toString() });
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "login/post/pending" });
    try {
      const data = await fetch("http://localhost:4000/user/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await data.json();
      localStorage.setItem("token", token.token);
      dispatch({
        type: "login/post/fullfilled",
        payload: {
          token: token.token,
          id: token.id,
          firstname: token.firstname,
          lastname: token.lastname,
        },
      });
    } catch (err) {
      dispatch({ type: "login/post/rejected", error: err.toString() });
    }
  };
};

export const getUser = (userID) => {
  return async (dispatch, getState) => {
    const state = getState()
    dispatch({ type: "user/get/pending" });
    try {
      const data = await fetch(`http://localhost:4000/user/${userID}`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.application.token}`
        }
      });
      const user1 = await data.json();
      dispatch({ type: "user/get/fullfilled", payload: user1 });
    } catch (err) {
      dispatch({ type: "user/get/rejected", error: err.toString() });
    }
  };
};

export default application;
