import React from "react";
import Viewer from "react-viewer";
import { baseUrl } from "../constants";
import "./imageviewer.css";

const ImageViewerView = ({ visible, images, handleClose }) => {
  return (
    <>
      <Viewer
        style={{ width: "500px" }}
        visible={visible}
        onClose={handleClose}
        images={images.map(({ alt, src }) => ({
          src: `${baseUrl}images/${src}`,
          alt,
        }))}
        changeable={false}
        container={document.getElementById("imageViewerContainer")}
      />
    </>
  );
};
export default ImageViewerView;
