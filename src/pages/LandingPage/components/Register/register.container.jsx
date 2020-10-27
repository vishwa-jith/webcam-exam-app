import React, { useState } from "react";
import { addUser } from "../../../../components/utils/requests";
import RegisterView from "./register.view";
const Register = () => {
  const initialRegistrationDetails = {
    firstname: "",
    lastname: "",
    is_doctor: false,
    username: "",
    password: "",
  };
  const [step, setStep] = useState(1);
  const [registrationDetails, setRegistrationDetails] = useState(
    initialRegistrationDetails
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "is_doctor") {
      setRegistrationDetails({
        ...registrationDetails,
        [name]: event.target.checked,
      });
    } else {
      setRegistrationDetails({ ...registrationDetails, [name]: value });
    }
  };
  const handleStep = () => {
    if (step === 1) {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <>
      <RegisterView
        registrationDetails={registrationDetails}
        addUser={addUser}
        handleChange={handleChange}
        handleStep={handleStep}
        step={step}
      />
    </>
  );
};
export default Register;
