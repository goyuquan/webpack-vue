import axios from 'axios';

const options = {};

// request interceptor
axios.interceptors.request.use(function (config) {
  console.log('request interceptor...');
  return config;
}, function (error) {
  console.log('request interceptor error');
  return Promise.reject(error);
});

// response interceptor
axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    console.log('response interceptor...200', response);
  }
  return response;
}, function (error) {
  console.log('response interceptor error');
  return Promise.reject(error);
});

function request(options) {
  return axios(options)
  .catch(function (error) {
    if (error.response) {
      console.log(`The request was made and the server responded with a status code that falls out of the range of 2xx`);
      console.log('error.response.data', error.response.data);
      console.log('error.response.status', error.response.status);
      console.log('error.response.headers', error.response.headers);
    } else if (error.request) {
      console.log(`The request was made but no response was received "error.request" is an instance of XMLHttpRequest in the browser`);
      console.log(error.request);
    } else {
      console.log(`Something happened in setting up the request that triggered an Error`);
      console.log('Error', error);
    }
    console.log(error.config);
  });
}

function get(obj) {
  if("data" in obj ) options.params = obj.data;
  options.url = obj.url;
  options.method = 'get';
  return request(options);
}

function post(obj) {
  options.data = obj.data,
  options.url = obj.url;
  options.method = 'post';
  return request(options);
}

export default { get, post };
