import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import application from "./features/application";

const combineRouter = combineReducers({
  application,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);
