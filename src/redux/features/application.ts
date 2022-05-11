import {
  actionApplication,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  startState,
} from "../types/application";

const initialState: startState = {
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  firstname: "",
  lastname: "",
};

const application = (state = initialState, action: actionApplication) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
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
    case LOGOUT_USER:
      return {
        ...state,
        token: "",
        id: "",
      };

    default:
      return state;
  }
};

export default application;
