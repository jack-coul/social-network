import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import application from "./features/application";
import posts from "./features/posts";
import conversation from "./features/conversation";
import group from "./features/group";
import message from "./features/message";
import notification from "./features/notification";
import saves from "./features/saves";
import comments from "./features/comments";
import user from "./features/user";
import alertReducer from "./features/alert";

const combineRouter = combineReducers({
  application,
  posts,
  conversation,
  group,
  message,
  notification,
  saves,
  comments,
  user,
  alertReducer,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof combineRouter>;
export type RootAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, void, RootAction>;

export default store;
