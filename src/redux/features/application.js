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
        loading: false,
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
        userINF: [...state.userINF, action.payload],
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        loading: false,
      };
    case "user/get/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export const registerUser = (firstname, lastname, login, email, password) => {
  return async (dispatch) => {
    dispatch({ type: "register/post/pending" });
    try {
      const res = await fetch("http://localhost:4000/user/signup", {
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
        }),
      });
      const user = await res.json();

      if (user.error) {
        dispatch({
          type: "register/post/rejected",
          error: user.error,
        });
      } else {
        dispatch({ type: "register/post/fullfilled" });
      }
    } catch (err) {
      dispatch({ type: "register/post/rejected", error: err.toString() });
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    console.log(1);
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
      if (token.error) {
        dispatch({
          type: "register/post/rejected",
          payload: token.error,
        });
      } else {
        dispatch({
          type: "login/post/fullfilled",
          payload: {
            token: token.token,
            id: token.id,
            firstname: token.firstname,
            lastname: token.lastname,
          },
        });
      }
      console.log(token);
    } catch (err) {
      dispatch({ type: "login/post/rejected", error: err.toString() });
    }
  };
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
      console.log(user);
      dispatch({
        type: "user/get/fullfilled",
        payload: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
        },
      });
    } catch (err) {
      dispatch({ type: "user/get/rejected", error: err.toString() });
    }
  };
};

export default application;
