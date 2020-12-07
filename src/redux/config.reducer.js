import { createStore, combineReducers } from "redux";
import { userDetails } from "./Reducers/user.reducer";
import { alertDetails } from "./Reducers/alert.reducer";
import { backDropDetails } from "./Reducers/backdrop.reducer";
import { testDetails } from "./Reducers/test.reducer";
import { imageDialogDetails } from "./Reducers/imagedialog.reducer";
export const configureReducer = () => {
  const store = createStore(
    combineReducers({
      userDetails,
      alertDetails,
      backDropDetails,
      testDetails,
      imageDialogDetails,
    })
  );
  return store;
};
