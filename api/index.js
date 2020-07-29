import axios from 'axios';

const api = axios.create({
  headers: {
    Accept: 'application/json'
  },
  baseURL: 'http://chmur.ski:7840/'
});

export default api;