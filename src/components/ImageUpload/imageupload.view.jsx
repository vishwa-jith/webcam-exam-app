import React from "react";
import { Button } from "@material-ui/core";
const ImageUploadView = ({ image, onChange }) => {
  return (
    <>
      {!image ? (
        <>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={onChange}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
        </>
      ) : (
        <img src={image} alt="profile preview" width="200px" height="200px" />
      )}
    </>
  );
};

export default ImageUploadView;
