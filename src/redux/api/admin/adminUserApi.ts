import { createApi } from '@reduxjs/toolkit/query/react';
import { logoutAdmin, setAdminUser } from 'redux/reducers/adminUser/adminUserSlice';
import { IAdminUser } from 'redux/reducers/adminUser/types';
import { axiosBaseQuery, baseURL } from '../../../api/apiRequest';

export const adminUserApi = createApi({
  reducerPath: 'adminUserApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${baseURL}/admin` }),
  endpoints: builder => ({
    loginAdminUser: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'post',
        data: body,
        withCredentials: true,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(adminUserApi.endpoints.getLoggedInUser.initiate(null));
        } catch (error) {}
      },
    }),
    logoutAdminUser: builder.query({
      query: () => ({
        url: '/logout',
        method: 'get',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logoutAdmin());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getLoggedInUser: builder.query<IAdminUser, null>({
      query: () => ({
        url: '/me',
        method: 'get',
      }),
      transformResponse: (result: { data: { user: IAdminUser } }) => {
        return result.data.user;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAdminUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginAdminUserMutation, useGetLoggedInUserQuery } = adminUserApi;
