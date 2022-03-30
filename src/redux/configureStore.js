import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import application from "./features/application";
import posts from "./features/posts";

const combineRouter = combineReducers({
  application,
  posts,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
