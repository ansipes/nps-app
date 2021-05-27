import axios from "axios";
const baseURL = process.env.REACT_APP_NPS_BASE_URL;
const apiKey = process.env.REACT_APP_NPS_API_KEY;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (request) => {
    request.params = { ...request.params, api_key: apiKey };
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return {
      pagination: {
        total: response.data.total,
        limit: response.data.limit,
        start: response.data.start,
      },
      data: response.data.data,
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

const { get, post, put, delete: destroy } = instance;
export { get, post, put, destroy };
