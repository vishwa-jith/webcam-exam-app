import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addImageViewer } from "../../../../redux/ActionCreators/imagedialog.action";
import HomeSettingsView from "./homesettings.view";
const HomeSettings = () => {
  //Const
  const dispatch = useDispatch();
  const initialNames = {
    firstname: "",
    lastname: "",
  };
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  //States
  const [isEdit, setIsEdit] = useState(false);
  const [names, setNames] = useState(initialNames);
  const [coverAnchorEl, setCoverAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [profileUploadOpen, setProfileUploadOpen] = useState(false);
  const [uploadType, setUploadType] = useState(null);
  //useEffect
  useEffect(() => {
    if (userDetails) {
      const { firstname, lastname } = userDetails;
      setNames({ firstname, lastname });
    }
  }, [userDetails]);
  //Event Handlers
  const handleProfileUploadClickOpen = (type) => {
    setProfileAnchorEl(null);
    setCoverAnchorEl(null);
    setProfileUploadOpen(true);
    setUploadType(type === 1 ? "Profile" : "Cover");
  };
  const handleSubmitProfileUpload = () => {
    setProfileUploadOpen(false);
  };
  const handleProfileUploadClose = () => {
    setProfileUploadOpen(false);
    setUploadType(null);
  };
  const handleProfilePopoverOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfilePopoverClose = () => {
    setProfileAnchorEl(null);
  };
  const handleCoverPopoverOpen = (event) => {
    setCoverAnchorEl(event.currentTarget);
  };
  const handleCoverPopoverClose = () => {
    setCoverAnchorEl(null);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNames({
      ...names,
      [name]: value,
    });
  };
  const handleOperation = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };
  const handleImageDialog = (imgDetails) => {
    setCoverAnchorEl(null);
    setProfileAnchorEl(null);
    dispatch(addImageViewer([imgDetails]));
  };

  return (
    <>
      <HomeSettingsView
        isEdit={isEdit}
        names={names}
        coverAnchorEl={coverAnchorEl}
        profileAnchorEl={profileAnchorEl}
        profileUploadOpen={profileUploadOpen}
        uploadType={uploadType}
        handleChange={handleChange}
        handleOperation={handleOperation}
        userDetails={userDetails}
        handleImageDialog={handleImageDialog}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
        handleCoverPopoverClose={handleCoverPopoverClose}
        handleProfilePopoverOpen={handleProfilePopoverOpen}
        handleProfilePopoverClose={handleProfilePopoverClose}
        handleProfileUploadClickOpen={handleProfileUploadClickOpen}
        handleProfileUploadClose={handleProfileUploadClose}
        handleSubmitProfileUpload={handleSubmitProfileUpload}
      />
    </>
  );
};
export default HomeSettings;
