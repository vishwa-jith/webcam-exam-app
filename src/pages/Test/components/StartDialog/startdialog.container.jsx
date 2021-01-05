import React, { useState, useEffect } from "react";

import StartDialogView from "./startdialog.view";
import { useSelector, shallowEqual } from "react-redux";

const StartDialog = ({
  openStartDialog,
  webcamRef,
  runCamera,
  handleCloseStartDialog,
  videoConstraints,
}) => {
  const initialNames = {
    firstname: "",
    lastname: "",
    default_avatar: true,
    default_cover: true,
  };
  const [names, setNames] = useState(initialNames);
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
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
  return (
    <>
      <StartDialogView
        openStartDialog={openStartDialog}
        handleCloseStartDialog={handleCloseStartDialog}
        webcamRef={webcamRef}
        runCamera={runCamera}
        videoConstraints={videoConstraints}
        names={names}
      />
    </>
  );
};
export default StartDialog;
