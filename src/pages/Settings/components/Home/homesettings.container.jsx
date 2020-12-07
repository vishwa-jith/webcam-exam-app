import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addImageDialog } from "../../../../redux/ActionCreators/imagedialog.action";
import HomeSettingsView from "./homesettings.view";
const HomeSettings = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [names, setNames] = useState({
    firstname: "",
    lastname: "",
  });
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
      addImageDialog([{ label: "Cover Image", imgPath: "default_cover.jpg" }])
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
        handleChange={handleChange}
        handleOperation={handleOperation}
        userDetails={userDetails}
        handleImageDialog={handleImageDialog}
      />
    </>
  );
};
export default HomeSettings;
