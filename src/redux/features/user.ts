import {
  EDIT_USER,
  ERRORS_USER,
  GET_ALL_USERS,
  GET_OTHER_USER,
  GET_USER,
  LOADING_USER,
  startState,
} from "../types/user";

const initialState: startState = {
  user: null,
  userINF: [],
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userINF: [...state.userINF, action.payload.user],
        user: action.payload,
        id: action.payload._id,
        loading: false,
      };
    case GET_OTHER_USER:
      return {
        ...state,
        searchUser: action.payload,
        loading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    case EDIT_USER:
      return {
        ...state,
        image: action.payload,
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

export default user;
