import * as actionTypes from "../actionTypes";
export const imageDialogDetails = (
  state = {
    imageDialogDetails: null,
    imageViewerDetails: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE_DIALOG:
      return {
        ...state,
        imageDialogDetails: action.payload,
      };
    case actionTypes.ADD_IMAGE_VIEWER:
      return {
        ...state,
        imageViewerDetails: action.payload,
      };
    default:
      return state;
  }
};
