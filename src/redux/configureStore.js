import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import application from "./features/application";
import posts from "./features/posts";
import conversation from "./features/conversation";
import group from "./features/group";
import message from "./features/message";
import notification from "./features/notification";
import saves from "./features/saves";
import comments from "./features/comments";

const combineRouter = combineReducers({
  application,
  posts,
  conversation,
  group,
  message,
  notification,
  saves,
  comments
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
