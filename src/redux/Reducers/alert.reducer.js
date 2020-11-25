import * as actionTypes from "../actionTypes";
export const userDetails = (
  state = {
    message: null,
    isError: false,
    isSucessful: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SUCCESS_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: false,
        isSucessful: true,
      };
    case actionTypes.FAILURE_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: true,
        isSucessful: false,
      };
    default:
      return state;
  }
};
