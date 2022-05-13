import { IUserObject } from "./application";
export interface IPostObject {
  _id: string;
  imagePost: string;
  text: string;
  likes?: [];
  user: IUserObject;
  datePublication: string;
}
