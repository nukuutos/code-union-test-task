import axios from 'axios';

export default axios.create({
  baseURL: `http://188.225.83.80:6719/api/v1`,
  // baseURL: `http://localhost:5000/api/v1`,
});
