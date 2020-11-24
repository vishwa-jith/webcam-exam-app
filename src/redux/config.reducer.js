import { createStore, combineReducers } from "redux";
import { userDetails } from "./Reducers";
export const configureReducer = () => {
  const store = createStore(
    combineReducers({
      userDetails,
    })
  );
  return store;
};
