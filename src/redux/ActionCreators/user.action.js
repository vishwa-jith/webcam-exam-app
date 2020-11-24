import * as actionTypes from "../actionTypes";
export const addUserDetails = (userDetails) => ({
  type: actionTypes.LOGIN_SUCESSFULL,
  payload: userDetails,
});
export const addLoginErrorMessage = (message) => ({
  type: actionTypes.LOGIN_FAILED,
  payload: { message },
});
