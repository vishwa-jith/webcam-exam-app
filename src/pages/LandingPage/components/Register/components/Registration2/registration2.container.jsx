import React, { useState } from "react";

import Registration2View from "./registration2.view";

const Registration2 = ({
  registrationDetails,
  handleChange,
  handleStep,
  handleSignUp,
}) => {
  //States
  const [showPass, setShowPass] = useState(false);
  //Event Handlers
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Registration2View
        registrationDetails={registrationDetails}
        showPass={showPass}
        handleChange={handleChange}
        handleStep={handleStep}
        handleSignUp={handleSignUp}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
      />
    </>
  );
};
export default Registration2;
