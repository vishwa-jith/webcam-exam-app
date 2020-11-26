import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import BackDropView from "./backdrop.view";
const BackDrop = () => {
  const [open, setOpen] = useState(false);
  const backDropDetails = useSelector(
    ({ backDropDetails }) => backDropDetails,
    shallowEqual
  );
  useEffect(() => {
    if (backDropDetails.showBackdrop) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [backDropDetails]);
  return (
    <>
      <BackDropView open={open} />
    </>
  );
};
export default BackDrop;
