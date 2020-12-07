import * as actionTypes from "../actionTypes";
export const addImageDialog = (imageDialogDetails) => ({
  type: actionTypes.ADD_IMAGE_DIALOG,
  payload: imageDialogDetails,
});
