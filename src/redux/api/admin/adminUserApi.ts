import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdminUser } from './types';
import { axiosBaseQuery, baseURL } from '../../../api/apiRequest';

export const adminUserApi = createApi({
  reducerPath: 'adminUserApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${baseURL}/admin` }),
  tagTypes: ['AdminUser'],
  endpoints: builder => ({
    loginAdminUser: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'post',
        data: body,
        withCredentials: true,
      }),
      invalidatesTags: [{ type: 'AdminUser', id: 'loggedIn' }],
    }),
    logoutAdminUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'get',
      }),
      invalidatesTags: [{ type: 'AdminUser', id: 'loggedIn' }],
    }),
    getLoggedInAdminUser: builder.query<IAdminUser, null>({
      query: () => ({
        url: '/me',
        method: 'get',
      }),
      transformResponse: (result: { data: { user: IAdminUser } }) => {
        return result.data.user;
      },
      providesTags: [{ type: 'AdminUser', id: 'loggedIn' }],
    }),
  }),
});

export const { useLoginAdminUserMutation, useGetLoggedInAdminUserQuery, useLogoutAdminUserMutation } = adminUserApi;
