import axios from 'axios';

// request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

export function get() {
  return "got it"
  return axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// export { get } ;
