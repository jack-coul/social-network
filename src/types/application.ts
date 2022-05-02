import { IUserObject } from "../interfaces/applicationI";

export type applicationState = {
  token: string;
  id: string;
  user: IUserObject;
  firstname: string;
  lastname: string;
};

type ILoad = {
  loadingUser: boolean;
  errors?: string | null;
};

export const LOADING_APPLICATION = "loading/application";
export const ERRORS_APPLICATION = "errors/application";
export const REGISTER_USER = "register/post/fullfilled";
export const LOGIN_USER = "login/post/fullfilled";

export type startState = Omit<applicationState, "user">;

type ILoadaction = {
  type: typeof LOADING_APPLICATION;
  payload: ILoad;
};

type IRegister = {
  type: typeof REGISTER_USER;
};

type ILogin = {
  type: typeof LOGIN_USER;
  payload: startState;
};

type IRejected = {
  type: typeof ERRORS_APPLICATION;
  payload: ILoad;
};

export type actionApplication = ILoadaction | IRegister | ILogin | IRejected;
