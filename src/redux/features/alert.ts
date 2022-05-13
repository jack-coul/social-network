import { ERRORS_USER, IUserAction, LOADING_USER } from "../types/user";
import {
  actionApplication,
  ERRORS_APPLICATION,
  ILoad,
  LOADING_APPLICATION,
} from "./../types/application";

const alertReducer = (
  state: ILoad = {},
  action: actionApplication | IUserAction
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
    default:
      return state;
  }
};

export default alertReducer;
