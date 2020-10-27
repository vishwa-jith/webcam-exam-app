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
//Get User Chat
export const getUserChat = async (id) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `chats/${id}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Add User Chat
export const addUserChat = async (data) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(baseUrl + `chats/new`, data, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Delete User Chat
export const deleteUserChats = async (data) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.put(baseUrl + `chats/delete`, data, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
export const notifyNewMessages = async () => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `users/notify`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
