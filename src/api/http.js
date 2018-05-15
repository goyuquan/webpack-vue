import axios from 'axios';
import qs from 'qs';

const options = {
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
};

// request interceptor
axios.interceptors.request.use(function (config) {
  console.log('request interceptor...');
  return config;
}, function (error) {
  console.log('_________________________request interceptor error');
  return Promise.reject(error);
});

// response interceptor
axios.interceptors.response.use(function (response) {
  console.log('response interceptor...');
  return response;
}, function (error) {
  console.log('=========================response interceptor error');
  return Promise.reject(error);
});

function request(options) {
  return axios(options)
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}

function get(obj) {
  if("data" in obj )
    options.data = qs.stringify(obj.data);
  options.url = obj.url;
  options.method = 'get';
  return request(options);
}

function post(obj) {
  options.data = qs.stringify(obj.data),
  options.url = obj.url;
  options.method = 'post';
  return request(options);
}

export default { get, post };
