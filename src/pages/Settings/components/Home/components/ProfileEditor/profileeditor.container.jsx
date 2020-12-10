import React from "react";

import ProfileEditorView from "./profileeditor.view";

const ProfileEditor = ({ isEdit, handleOperation }) => {
  return (
    <>
      <ProfileEditorView isEdit={isEdit} handleOperation={handleOperation} />
    </>
  );
};
export default ProfileEditor;
