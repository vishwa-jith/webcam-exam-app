import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import SnackbarView from "./snackbar.view";
const Snackbar = () => {
  const [open, setOpen] = useState(false);
  const alertDetails = useSelector(
    ({ alertDetails }) => alertDetails,
    shallowEqual
  );
  const handleClose = (event) => {
    setOpen(false);
  };
  useEffect(() => {
    if (
      alertDetails.isError ||
      alertDetails.isSucessful ||
      alertDetails.isInfo ||
      alertDetails.isWarning
    ) {
      setOpen(true);
    }
  }, [alertDetails]);
  return (
    <>
      <SnackbarView
        open={open}
        handleClose={handleClose}
        alertDetails={alertDetails}
      />
    </>
  );
};
export default Snackbar;
