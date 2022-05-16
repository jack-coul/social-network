import {
  ADD_FOLLOW,
  BLOCK_USER,
  EDIT_USER,
  GET_ALL_USERS,
  GET_OTHER_USER,
  GET_USER,
  REMOVE_FOLLOW,
  startState,
  UNBLOCK_USER,
} from "../types/user";

const initialState: startState = {
  user: null,
  userINF: [],
  users: [],
  block: false,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userINF: [...state.userINF, action.payload],
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

    case ADD_FOLLOW:
      return {
        ...state,
        user: action.payload,
        adding: false,
      };

    case REMOVE_FOLLOW:
      return {
        ...state,
        user: action.payload,
        adding: false,
      };

    case BLOCK_USER:
      return {
        ...state,
        block: true,
      };
    case UNBLOCK_USER:
      return {
        ...state,
        block: false,
      };
    default:
      return state;
  }
};

export default user;
