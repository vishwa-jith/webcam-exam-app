import React from "react";
import Viewer from "react-viewer";
import { baseUrl } from "../constants";
const ImageViewerView = ({ visible, images, handleClose }) => {
  return (
    <>
      <Viewer
        visible={visible}
        onClose={handleClose}
        onMaskClick={handleClose}
        images={images.map(({ alt, src }) => ({
          src: `${baseUrl}images/${src}`,
          alt,
        }))}
        downloadable={true}
        changeable={false}
      />
    </>
  );
};
export default ImageViewerView;
