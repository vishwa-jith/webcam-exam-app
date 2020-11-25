import React, { useState } from "react";
import Login from "./login.view";
import { loginUser } from "../../../../components/utils/requests";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserToken } from "../../../../redux/ActionCreators/user.action";
import {
  addSuccessAlert,
  addFailureAlert,
} from "../../../../redux/ActionCreators/alert.action";
const LoginView = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = () => {
    loginUser(loginDetails)
      .then((res) => {
        localStorage.setItem("token", res.token);
        dispatch(addUserToken(res.token));
        dispatch(addSuccessAlert(res.message));
        history.push("/testtopics");
      })
      .catch((error) =>
        dispatch(addFailureAlert(error.response.data.err.message))
      );
  };
  return (
    <>
      <Login
        showPass={showPass}
        loginDetails={loginDetails}
        handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default LoginView;
