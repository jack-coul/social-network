import { applicationState, IUserObject } from "./application";

export const LOADING_USER = "loading/user";
export const ERRORS_USER = "errors/user";
export const GET_USER = "get/user";
export const GET_OTHER_USER = "get/other/user";
export const GET_ALL_USERS = "get/all/users";
export const EDIT_USER = "edit/user";
export const BLOCK_USER = "block/user";
export const UNBLOCK_USER = "unblock/user";
export const ADD_FOLLOW = "add/follow";
export const REMOVE_FOLLOW = "remove/follow";

export type startState = Pick<
  applicationState,
  "user" | "userINF" | "block" | "users"
>;

type ILoad = {
  loaddingUser: boolean;
  errors?: null | string;
};

type ILoadingAction = {
  type: typeof LOADING_USER;
  payload: ILoad;
};

type IErrorsAction = {
  type: typeof ERRORS_USER;
  payload: ILoad;
};

type IGetUserAction = {
  type: typeof GET_USER;
  payload: IUserObject;
};

type IGetOtherUserAction = {
  type: typeof GET_OTHER_USER;
  payload: IUserObject;
};

type IGetAllUsersAction = {
  type: typeof GET_ALL_USERS;
  payload: IUserObject[];
};

type IEditUserAction = {
  type: typeof EDIT_USER;
  payload: string;
};

type IBlockUserAction = {
  type: typeof BLOCK_USER;
};

type IAddFollow = {
  type: typeof ADD_FOLLOW;
  payload: string;
};

type IRemoveFollow = {
  type: typeof REMOVE_FOLLOW;
  payload: string;
};

export type IUserAction =
  | ILoadingAction
  | IErrorsAction
  | IGetUserAction
  | IGetOtherUserAction
  | IGetAllUsersAction
  | IEditUserAction
  | IBlockUserAction
  | IAddFollow
  | IRemoveFollow;
