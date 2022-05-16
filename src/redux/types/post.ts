import { IUserObject } from "./application";
export interface IPostObject {
  _id: string;
  imagePost: string;
  text: string;
  likes?: IUserObject[];
  user: IUserObject;
  datePublication: string;
}

export interface IStartState {
  posts: IPostObject[];
}

export interface ILoadAndErrorsPost {
  loadingPost: boolean;
  errors?: string | null;
}

export const GET_ALL_POSTS = "get/all/posts";
export const GET_MY_POSTS = "get/my/posts";
export const GET_USER_POSTS = "get/user/posts";
export const ADD_POST = "add/post";
export const EDIT_POST = "edit/post";
export const DELETE_POST = "delete/post";
export const LOAD_POST = "loading/posts";
export const ERROR_POST = "error/posts";

type IGetAllPostsAction = {
  type: typeof GET_ALL_POSTS;
  payload: IPostObject[];
};

type IGetMyPostsAction = {
  type: typeof GET_MY_POSTS;
  payload: IPostObject[];
};

type IGetUserPostsAction = {
  type: typeof GET_USER_POSTS;
  payload: IPostObject[];
};

type IAddPostAction = {
  type: typeof ADD_POST;
  payload: IPostObject;
};

type IEditPostAction = {
  type: typeof EDIT_POST;
  payload: string;
};

type IDeletePostAction = {
  type: typeof DELETE_POST;
  payload: string;
};

type ILoadingPost = {
  type: typeof LOAD_POST;
  payload: ILoadAndErrorsPost;
};

type IErrorsPost = {
  type: typeof ERROR_POST;
  payload: ILoadAndErrorsPost;
};

export type IPostAction =
  | IGetAllPostsAction
  | IGetUserPostsAction
  | IGetMyPostsAction
  | IEditPostAction
  | IDeletePostAction
  | IAddPostAction
  | ILoadingPost
  | IErrorsPost;
