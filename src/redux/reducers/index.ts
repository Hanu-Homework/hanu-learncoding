import { combineReducers } from "redux";
import userReducer from "./user";
import uiReducer from "./ui";
import dataReducer from "./data";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
