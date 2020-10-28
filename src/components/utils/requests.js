import axios from "axios";
import { baseUrl } from "../constants";
//Registration
export const addUser = async (userDetails) => {
  var response = await axios.post(baseUrl + "users/signup", userDetails);
  return response;
};
//Login
export const loginUser = async (userDetails) => {
  var response = await axios.post(baseUrl + "users/login", userDetails);
  return response.data;
};
//User Details
export const getUserDetails = async () => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `users/profile`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//User List
export const getUserList = async () => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + "users", {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};

//Test Details
export const getTestTopics = async () => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `test-topic`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
