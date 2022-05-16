import {
  GET_ALL_POSTS,
  GET_USER_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_MY_POSTS,
} from "./../types/post";
import { IPostAction, IStartState } from "../types/post";

const initialState: IStartState = {
  posts: [],
};

const posts = (state = initialState, action: IPostAction) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case GET_MY_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case GET_USER_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      return {
        ...state,
        message: "Успешное изменение",
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== action.payload)],
        message: "Успешное удаление",
      };
    default:
      return state;
  }
};

export default posts;
