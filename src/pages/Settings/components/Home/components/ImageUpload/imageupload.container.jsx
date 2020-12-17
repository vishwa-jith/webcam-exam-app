import React, { useState } from "react";

import ImageUploadView from "./imageupload.view";

const ImageUpload = ({
  uploadType,
  profileUploadOpen,
  handleProfileUploadClose,
  handleSubmitProfileUpload,
}) => {
  //States
  const [profileImage, setProfileImage] = useState({ url: "", image: null });
  const [coverImage, setCoverImage] = useState({ url: "", image: null });
  //Event Handlers
  const onChange = (event) => {
    if (uploadType === "Profile") {
      setProfileImage({
        url: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0],
      });
    } else {
      setCoverImage({
        url: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0],
      });
    }
  };
  const removeImage = () => {
    if (uploadType === "Profile") {
      setProfileImage(null);
    } else {
      setCoverImage(null);
    }
  };

  return (
    <>
      <ImageUploadView
        profileImage={profileImage}
        coverImage={coverImage}
        uploadType={uploadType}
        onChange={onChange}
        profileUploadOpen={profileUploadOpen}
        handleProfileUploadClose={handleProfileUploadClose}
        handleSubmitProfileUpload={handleSubmitProfileUpload}
        removeImage={removeImage}
      />
    </>
  );
};

export default ImageUpload;
