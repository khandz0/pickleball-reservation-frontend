import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const register = (name: string, email: string, password: string) =>
  api.post('/auth/register', { name, email, password });

export default api;
