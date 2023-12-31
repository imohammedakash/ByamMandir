import axios from 'axios';

export const loginUserApi = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`/api/users/login`, credentials);
  return response.data;
};

export const registerUserApi = async (userData: { firstname: string; lastname: string; email: string; password: string; phone: string; }) => {
  const response = await axios.post(`/api/users/signup`, userData);
  return response.data;
};
export const getUserProfileApi = async () => {
  const response = await axios.get(`/api/users/profile`);
  return response.data;
};
export const updateUserApi = async (userData: { firstname: string; lastname: string; phone: string; profile: string }) => {
  const response = await axios.post(`/api/users/update-profile`, userData);
  return response.data;
};
export const LogoutUserApi = async () => {
  const response = await axios.get(`/api/users/logout`);
  return response.data;
}
export const verifyEmailApi = async (userData: { otp: string; }) => {
  const response = await axios.post(`/api/users/verify-email`, userData);
  return response.data;
};

