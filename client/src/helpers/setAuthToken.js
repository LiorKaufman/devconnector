import axios from 'axios';

const setAuthToken = (token) => {
  // if there is token in local storage set the header
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
