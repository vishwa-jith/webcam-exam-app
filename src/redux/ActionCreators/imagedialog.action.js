import * as actionTypes from "../actionTypes";
export const addImageDialog = (imageDialogDetails) => ({
  type: actionTypes.ADD_IMAGE_DIALOG,
  payload: imageDialogDetails,
});
export const addImageViewer = (imageDialogDetails) => ({
  type: actionTypes.ADD_IMAGE_VIEWER,
  payload: imageDialogDetails,
});
