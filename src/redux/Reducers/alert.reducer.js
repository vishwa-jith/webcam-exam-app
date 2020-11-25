import * as actionTypes from "../actionTypes";
export const alertDetails = (
  state = {
    message: null,
    isError: false,
    isSucessful: false,
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
