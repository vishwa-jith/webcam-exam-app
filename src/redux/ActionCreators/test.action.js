import * as actionTypes from "../actionTypes";
export const addTestDetails = (testDetails) => ({
  type: actionTypes.ADD_TEST_DETAILS,
  payload: testDetails,
});
