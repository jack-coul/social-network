import { ILoadAndErrorsPost, IPostObject } from "./post";

export interface IStartState {
  saves: IPostObject[];
}

export const GET_SAVES = "get/saves";
export const LOAD_SAVES = "loading/posts";
export const ERROR_SAVES = "error/posts";

type IGetSavesAction = {
  type: typeof GET_SAVES;
  payload: IPostObject[];
};

type ILoadSavesAction = {
  type: typeof LOAD_SAVES;
  payload: ILoadAndErrorsPost;
};

type IErrorSavesAction = {
  type: typeof ERROR_SAVES;
  payload: ILoadAndErrorsPost;
};

export type ISavesAction =
  | IGetSavesAction
  | ILoadSavesAction
  | IErrorSavesAction;
