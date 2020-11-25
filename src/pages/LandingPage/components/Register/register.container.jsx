import React, { useState } from "react";
import { addUser } from "../../../../components/utils/requests";
import RegisterView from "./register.view";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addSuccessAlert,
  addFailureAlert,
} from "../../../../redux/ActionCreators/alert.action";
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
  const handleSignUp = () => {
    addUser(registrationDetails)
      .then((res) => {
        console.log(res);
        dispatch(addSuccessAlert(res.data.message));
        history.push("/login");
      })
      .catch((error) =>
        dispatch(addFailureAlert(error.response.data.message.message))
      );
  };
  return (
    <>
      <RegisterView
        registrationDetails={registrationDetails}
        handleSignUp={handleSignUp}
        handleChange={handleChange}
        handleStep={handleStep}
        step={step}
      />
    </>
  );
};
export default Register;
