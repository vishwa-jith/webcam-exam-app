import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import ImageViewerView from "./imageviewer.view";

const ImageViewer = () => {
  //Const
  const images = useSelector(
    ({ imageDialogDetails }) => imageDialogDetails.imageViewerDetails,
    shallowEqual
  );
  //States
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
  };
  //useEffect
  useEffect(() => {
    if (images) {
      setVisible(true);
    }
  }, [images]);

  return (
    <>
      {images && (
        <ImageViewerView
          visible={visible}
          handleClose={handleClose}
          images={images}
        />
      )}
    </>
  );
};
export default ImageViewer;
