import * as actionTypes from "../actionTypes";
export const testDetails = (
  state = {
    testDetails: null,
    vision: true,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TEST_DETAILS:
      return {
        ...state,
        testDetails: action.payload,
      };
    case actionTypes.VISION_GAINED:
      return {
        ...state,
        vision: true,
      };
    case actionTypes.VISION_LOST:
      return {
        ...state,
        vision: false,
      };
    default:
      return state;
  }
};
