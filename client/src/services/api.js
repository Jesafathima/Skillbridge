import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Match your backend URL
});

//export const getCourses = () => API.get('/courses');
export default instance;