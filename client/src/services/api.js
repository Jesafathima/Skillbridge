import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Match your backend URL
});

// Automatically attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

//export const getCourses = () => API.get('/courses');
export default api;