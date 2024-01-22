import axios from 'axios';

const AxiosUrl = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'), //the token is a variable which holds the token
  },
});

export default AxiosUrl;
