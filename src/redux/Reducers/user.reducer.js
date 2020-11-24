import * as actionTypes from "../actionTypes";
export const userDetails = (
  state = {
    userDetails: null,
    isLoggedIn: false,
    message: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCESSFULL:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        isLoggedIn: true,
        message: action.payload.message,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        userDetails: null,
        isLoggedIn: false,
        message: action.payload.message,
      };
    default:
      return { ...state, message: null };
  }
};
