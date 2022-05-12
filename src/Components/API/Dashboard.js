import {callGetApi, callPostApi} from './Registration';

// ADD USER PROFILE API
export const addUserProfile = body => {
  return callPostApi('user/addprofile', body);
};

// REGISTER USER API
export const registerUser = body => {
  return callPostApi('user/register', body);
};

// LOGIN USER API
export const loginUser = body => {
  return callPostApi('user/login', body);
};

// GET USER PROFILE API
export const getUserProfile = body => {
  return callGetApi('user/getprofile', body);
};

// GET LOGOUT USER API
export const logoutUser = body => {
  return callPostApi('user/logout', body);
};
