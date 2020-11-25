import * as actionTypes from "../actionTypes";
export const addSuccessAlert = (message) => ({
  type: actionTypes.SUCCESS_ALERT,
  payload: message,
});
export const addFailureAlert = (message) => ({
  type: actionTypes.FAILURE_ALERT,
  payload: message,
});
