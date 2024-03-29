import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addImageViewer } from "../../../../redux/ActionCreators/imagedialog.action";
import { addSuccessAlert } from "../../../../redux/ActionCreators/alert.action";
import {
  uploadImage,
  updateProfile,
} from "../../../../components/utils/requests";
import HomeSettingsView from "./homesettings.view";
const HomeSettings = () => {
  //Const
  const dispatch = useDispatch();
  const initialNames = {
    firstname: "",
    lastname: "",
    default_avatar: true,
    default_cover: true,
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
      const {
        _id,
        firstname,
        lastname,
        default_avatar,
        default_cover,
      } = userDetails;
      setNames({ _id, firstname, lastname, default_avatar, default_cover });
    }
  }, [userDetails]);
  //Event Handlers
  const handleProfileUploadClickOpen = (type) => {
    setProfileAnchorEl(null);
    setCoverAnchorEl(null);
    setProfileUploadOpen(true);
    setUploadType(type === 1 ? "Profile" : "Cover");
  };
  const handleSubmitProfileUpload = (image) => {
    uploadImage(
      image,
      uploadType === "Profile" ? "profile" : "cover"
    ).then((res) => dispatch(addSuccessAlert(res.message)));
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
  const updateVisibility = () => {
    const { default_avatar } = names;
    updateProfile({ default_avatar: !default_avatar }).then((res) => {
      dispatch(addSuccessAlert(res.message));
      setNames({ ...names, default_avatar: !default_avatar });
      setProfileAnchorEl(null);
      setIsEdit(false);
    });
  };
  const handleOperation = () => {
    const { firstname, lastname } = names;
    if (isEdit) {
      updateProfile({ firstname, lastname }).then((res) => {
        dispatch(addSuccessAlert(res.message));
        setIsEdit(false);
      });
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
        updateVisibility={updateVisibility}
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
