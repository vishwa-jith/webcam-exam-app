import React from "react";

import ProfileContentView from "./profilecontent.view";

const ProfileContent = ({ userDetails, isEdit, names, handleChange }) => {
  return (
    <>
      <ProfileContentView
        userDetails={userDetails}
        isEdit={isEdit}
        names={names}
        handleChange={handleChange}
      />
    </>
  );
};
export default ProfileContent;
