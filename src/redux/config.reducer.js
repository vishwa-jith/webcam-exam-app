import { createStore, combineReducers } from "redux";
import { userDetails } from "./Reducers/user.reducer";
import { alertDetails } from "./Reducers/alert.reducer";
export const configureReducer = () => {
  const store = createStore(
    combineReducers({
      userDetails,
      alertDetails,
    })
  );
  return store;
};
