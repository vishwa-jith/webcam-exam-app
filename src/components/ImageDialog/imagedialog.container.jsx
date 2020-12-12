import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import ImageDialogView from "./imagedialog.view";

function ImageDialog() {
  //Const
  const tutorialSteps = useSelector(
    ({ imageDialogDetails }) => imageDialogDetails.imageDialogDetails,
    shallowEqual
  );
  //States
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const maxSteps = tutorialSteps ? tutorialSteps.length : 0;
  //Event Handlers
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(true);
  }, [tutorialSteps]);

  return (
    <>
      {tutorialSteps && (
        <ImageDialogView
          open={open}
          tutorialSteps={tutorialSteps}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
          maxSteps={maxSteps}
          handleNext={handleNext}
          handleBack={handleBack}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default ImageDialog;
