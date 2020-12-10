import React, { useState } from "react";

import ImageUploadView from "./imageupload.view";

const ImageUpload = ({
  uploadType,
  profileUploadOpen,
  handleProfileUploadClose,
  handleSubmitProfileUpload,
}) => {
  //States
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  //Event Handlers
  const onChange = (event) => {
    if (uploadType === "Profile") {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    } else {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
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
