import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import HomeSettingsView from "./homesettings.view";
const HomeSettings = () => {
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
      />
    </>
  );
};
export default HomeSettings;
