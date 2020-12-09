import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addImageViewer } from "../../../../redux/ActionCreators/imagedialog.action";
import HomeSettingsView from "./homesettings.view";
const HomeSettings = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [names, setNames] = useState({
    firstname: "",
    lastname: "",
  });
  const [coverAnchorEl, setCoverAnchorEl] = useState(null);
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
  const handleImageDialog = () => {
    dispatch(
      addImageViewer([{ alt: "Cover Image", src: "default_cover.jpg" }])
    );
  };
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  useEffect(() => {
    if (userDetails) {
      const { firstname, lastname } = userDetails;
      setNames({ firstname, lastname });
    }
  }, [userDetails]);
  return (
    <>
      <HomeSettingsView
        isEdit={isEdit}
        names={names}
        coverAnchorEl={coverAnchorEl}
        handleChange={handleChange}
        handleOperation={handleOperation}
        userDetails={userDetails}
        handleImageDialog={handleImageDialog}
        handleCoverPopoverOpen={handleCoverPopoverOpen}
        handleCoverPopoverClose={handleCoverPopoverClose}
      />
    </>
  );
};
export default HomeSettings;
