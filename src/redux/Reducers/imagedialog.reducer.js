import * as actionTypes from "../actionTypes";
export const imageDialogDetails = (
  state = {
    imageDialogDetails: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE_DIALOG:
      return {
        ...state,
        imageDialogDetails: action.payload,
      };
    default:
      return state;
  }
};
