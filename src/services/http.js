import axios from 'axios';

const get = (url) => {
  return axios
    .get(url)
    .then((res) => ({
      res,
    }))
    .catch((err) => ({
      err,
    }));
};

const http = {
  get,
};

export default http;
