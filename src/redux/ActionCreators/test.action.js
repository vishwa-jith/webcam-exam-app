import * as actionTypes from "../actionTypes";
export const addTestDetails = (testDetails) => ({
  type: actionTypes.ADD_TEST_DETAILS,
  payload: testDetails,
});
export const visionGained = () => ({
  type: actionTypes.VISION_GAINED,
});
export const visionLost = () => ({
  type: actionTypes.VISION_LOST,
});
