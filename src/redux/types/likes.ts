import { IUserObject } from "./application";

export interface ILikesState {
  likes: IUserObject[];
}

interface ILoadAndErrorLike {
  loadingLike: boolean;
  errors?: null | string;
}

export const LOAD_LIKES = "loading/likes";
export const ERRORS_LIKES = "errors/likes";
export const ADD_LIKE = "add/like";
export const REMOVE_LIKE = "remove/like";

export type ILoadLikeAction = {
  type: typeof LOAD_LIKES;
  payload: ILoadAndErrorLike;
};

export type IErrorLikeAction = {
  type: typeof ERRORS_LIKES;
  payload: ILoadAndErrorLike;
};

export type IAddLikeAction = {
  type: typeof ADD_LIKE;
  payload: IUserObject[];
};

export type IRemoveLikeAction = {
  type: typeof REMOVE_LIKE;
  payload: IUserObject[];
};

export type ILikeAction =
  | ILoadLikeAction
  | IErrorLikeAction
  | IAddLikeAction
  | IRemoveLikeAction;
