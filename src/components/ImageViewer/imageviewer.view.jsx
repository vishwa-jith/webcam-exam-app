import React from "react";
import Viewer from "react-viewer";
import { baseUrl } from "../constants";
import "./imageviewer.css";
const ImageViewerView = ({ visible, images, handleClose }) => {
  return (
    <>
      <Viewer
        visible={visible}
        onClose={handleClose}
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
