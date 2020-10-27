import React from "react";
import Registration1 from "./components/Registration1";
import Registration2 from "./components/Registration2";
const RegisterView = ({
  registrationDetails,
  addUser,
  handleChange,
  handleStep,
  step,
}) => {
  return (
    <>
      {step === 1 && (
        <Registration1
          registrationDetails={registrationDetails}
          handleChange={handleChange}
          handleStep={handleStep}
        />
      )}
      {step === 2 && (
        <Registration2
          registrationDetails={registrationDetails}
          handleChange={handleChange}
          handleStep={handleStep}
          addUser={addUser}
        />
      )}
    </>
  );
};
export default RegisterView;
