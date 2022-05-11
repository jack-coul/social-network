export const GET_COMMENTS = "get/comments";
export const ADD_COMMENT = "add/comment";
export const DELETE_COMMENT = "delete/comment";
export const LOADING_COMMENT = "loading/comment";
export const ERROR_COMMENT = "error/comment";

interface ICommentObject {
  _id: string;
  text: string;
  user?: object;
  post?: object;
  dateComments?: object;
}

type ILoadComment = {
  loadingComments: boolean;
  errors?: null | string;
};

export interface ICommentState {
  comments: ICommentObject[];
}

type ILoadingComment = {
  type: typeof LOADING_COMMENT;
  payload: ILoadComment;
};

type IErrorComment = {
  type: typeof ERROR_COMMENT;
  payload: ILoadComment;
};

type IGetCommentsAction = {
  type: typeof GET_COMMENTS;
  payload: ICommentObject[];
};

type IAddComment = {
  type: typeof ADD_COMMENT;
  payload: ICommentObject;
};

type IDeleteComment = {
  type: typeof DELETE_COMMENT;
  payload: string;
};

export type IActionComment =
  | IGetCommentsAction
  | IAddComment
  | IDeleteComment
  | ILoadingComment
  | IErrorComment;
