const initialState = {
  userINF: [],
  users: [],
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  firstname: "",
  lastname: "",
  image: "",
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
        userINF: [...state.userINF, action.payload.user],
        user: action.payload.user,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        loading: false,
        image: action.payload.image,
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
        searchID: action.payload.user._id,
        searchFirstname: action.payload.firstname,
        searchLastname: action.payload.lastname,
        searchLogin: action.payload.login,
        loading: false,
        searchImage: action.payload.image,
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
        userINF: [],
        users: [],
        token: localStorage.removeItem("token"),
        id: "",
        firstname: "",
        lastname: "",
        image: "",
        error: null,
      }
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
      if (user.error) {
        dispatch({ type: "user/get/rejected", error: user.error });
      } else {
        localStorage.setItem("id", user.id);

        dispatch({
          type: "user/get/fullfilled",
          payload: {
            user,
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            image: user.image,
          },
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
          payload: {
            user: user.user,
            firstname: user.firstname,
            lastname: user.lastname,
            image: user.image,
            login: user.login,
          },
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
