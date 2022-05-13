import { IRegisterForm } from "../../interfaces";

export type IUserObject = {
  _id: string;
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
  login: string;
  password: string;
  role?: string;
  freinds?: [];
  follows?: [];
  registredDate?: Date;
};

export type applicationState = {
  token: string | null;
  id: string | null;
  user: IUserObject | null;
  users: IUserObject[];
  userINF: IUserObject[];
  firstname: string;
  lastname: string;
  block: boolean;
};

export type ILoad = {
  loadingSign?: boolean;
  errors?: string | null;
};

export const LOADING_APPLICATION = "loading/application";
export const ERRORS_APPLICATION = "errors/application";
export const REGISTER_USER = "register/post/fullfilled";
export const LOGIN_USER = "login/post/fullfilled";
export const LOGOUT_USER = "logout/user";

export type startState = Omit<
  applicationState,
  "user" | "userINF" | "block" | "users"
>;
export type ISigninForm = Pick<IRegisterForm, "email" | "password">;
export type IEditUserData = Pick<
  IUserObject,
  "firstname" | "lastname" | "login" | "avatar"
>;

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

type ILogoutUser = {
  type: typeof LOGOUT_USER;
};

export type actionApplication =
  | ILoadaction
  | IRegister
  | ILogin
  | IRejected
  | ILogoutUser;
