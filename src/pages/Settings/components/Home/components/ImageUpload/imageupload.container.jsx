import { Event } from "@material-ui/icons";
import React, { useState } from "react";
import ImageUploadView from "./imageupload.view";
const ImageUpload = ({ profileUploadOpen, handleProfileUploadClose }) => {
  const [image, setImage] = useState(null);
  const onChange = (event) => {
    console.log(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <ImageUploadView
        image={image}
        onChange={onChange}
        profileUploadOpen={profileUploadOpen}
        handleProfileUploadClose={handleProfileUploadClose}
      />
    </>
  );
};

export default ImageUpload;
