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
//Logout
export const logoutUser = async () => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + "users/logout", {
    headers: {
      Authorization: bearer,
    },
  });
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

//Test Info
export const getTestInfo = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `test-topic/${testId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};

//Test Detail
export const getTestDetail = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `test-topic/single/${testId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};

//Test Questions
export const getTestQuestions = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `questions/${testId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Test Questions
export const sendAnswers = async (testId, answers) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(
    baseUrl + `questions/add-mark/${testId}`,
    answers,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
//Start Test
export const startTest = async (testId, data) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(
    baseUrl + `test-info/start-test/${testId}`,
    data,
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
//Add Warning
export const addWarning = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(
    baseUrl + `test-info/add-warning/${testId}`,
    {},
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
//Uploads
export const uploadImage = async (file, type) => {
  const formData = new FormData();
  formData.append(type, file);
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(baseUrl + `upload/${type}-image`, formData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: bearer,
    },
  });
  return response.data;
};
//Update Profile Details
export const updateProfile = async (firstname, lastname) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(
    baseUrl + `users/update-profile`,
    { firstname, lastname },
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
//Test Detail
export const getTestLeaderBoard = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `test-info/leaderboard/${testId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Test Answers
export const getTestAnswers = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.get(baseUrl + `answer/${testId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Update Test Answers
export const updateTestAnswer = async (testId, answer) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.put(baseUrl + `answer/update/${testId}`, answer, {
    headers: {
      Authorization: bearer,
    },
  });
  return response.data;
};
//Add Warning
export const addCamWarning = async (testId) => {
  const token = localStorage.getItem("token");
  const bearer = "Bearer " + token;
  var response = await axios.post(
    baseUrl + `test-info/add-cam-warning/${testId}`,
    {},
    {
      headers: {
        Authorization: bearer,
      },
    }
  );
  return response.data;
};
