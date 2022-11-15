import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_BACKEND_URL_DEV as string}`
    : `${process.env.REACT_APP_BACKEND_URL_PROD as string}`;

const token = 'dummy';

const instance = axios.create({
  baseURL: `${baseURL}/${process.env.REACT_APP_API_VERSION as string}`,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  },
});

const apiRequest = instance;

export { apiRequest };
