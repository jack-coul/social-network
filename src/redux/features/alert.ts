import {
  ERROR_COMMENT,
  IActionComment,
  LOADING_COMMENT,
} from "../types/comments";
import { ERROR_POST, IPostAction, LOAD_POST } from "../types/post";
import { ERRORS_USER, IUserAction, LOADING_USER } from "../types/user";
import {
  actionApplication,
  ERRORS_APPLICATION,
  ILoad,
  LOADING_APPLICATION,
} from "./../types/application";

const alertReducer = (
  state: ILoad = {},
  action: actionApplication | IUserAction | IActionComment | IPostAction
): ILoad => {
  switch (action.type) {
    case LOADING_APPLICATION:
      return action.payload;
    case LOADING_USER:
      return action.payload;
    case ERRORS_APPLICATION:
      return action.payload;
    case ERRORS_USER:
      return action.payload;
    case LOADING_COMMENT:
      return action.payload;
    case ERROR_COMMENT:
      return action.payload;
    case LOAD_POST:
      return action.payload;
    case ERROR_POST:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
