import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_BACKEND_URL_DEV as string}`
    : `${process.env.REACT_APP_BACKEND_URL_PROD as string}`;

const token = 'dummy';

const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const apiRequest = axiosInstance;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: baseURL },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params, withCredentials: true });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };

export { apiRequest, baseURL, axiosBaseQuery };
