import { applicationTypes } from "../types/application";

export interface IUserObject {
  firstname: string;
  lastname: string;
  login: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  [key: string]: any;
}
export interface IPayload {
  loading: boolean;
  token: string;
  id: string;
  firstname: string;
  lastname: string;
}
export interface IPendingActionRegister {
  type: applicationTypes.REGISTER_PENDING;
}

export interface IFulfilledActionRegister {
  type: applicationTypes.REGISTER_FULLFILLED;
}
export interface IRejectedActionRegister {
  type: applicationTypes.REGISTER_REJECTED;
  error: string;
}

export interface ISigninActionPending {
  type: applicationTypes.SIGNIN_PENDING;
}

export interface ISigninActionFulfilled {
  type: applicationTypes.SIGNIN_FULFILLED;
  payload: IPayload;
}

export interface ISigninActionRejected {
  type: applicationTypes.SIGNIN_REJECTED;
  error: string;
  payload: string;
}
