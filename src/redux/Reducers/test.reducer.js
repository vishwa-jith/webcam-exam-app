import * as actionTypes from "../actionTypes";
export const testDetails = (
  state = {
    testDetails: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TEST_DETAILS:
      return {
        ...state,
        testDetails: action.payload,
      };
    default:
      return state;
  }
};
