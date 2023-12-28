import axios from 'axios';

export const loginUserApi = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`/api/users/login`, credentials);
  return response.data;
};

export const registerUserApi = async (userData: { firstname: string; lastname: string; email: string; password: string; phone: string; }) => {
  const response = await axios.post(`/api/users/signup`, userData);
  return response.data;
};
