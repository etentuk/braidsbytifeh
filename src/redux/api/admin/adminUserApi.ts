import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdminUser } from './types';
import { endpoints, axiosBaseQuery } from 'tools';

export const adminUserApi = createApi({
  reducerPath: 'adminUserApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['AdminUser'],
  endpoints: builder => ({
    loginAdminUser: builder.mutation({
      query: body => ({
        url: endpoints.admin.login,
        method: 'post',
        data: body,
        withCredentials: true,
      }),
      invalidatesTags: ['AdminUser'],
    }),
    logoutAdminUser: builder.mutation({
      query: () => ({
        url: endpoints.admin.logout,
        method: 'get',
      }),
      invalidatesTags: ['AdminUser'],
    }),
    getLoggedInAdminUser: builder.query<IAdminUser, null>({
      query: () => ({
        url: endpoints.admin.getLoggedInUser,
        method: 'get',
      }),
      transformResponse: (result: { data: { user: IAdminUser } }) => {
        return result.data.user;
      },
      providesTags: ['AdminUser'],
    }),
  }),
});

export const { useLoginAdminUserMutation, useGetLoggedInAdminUserQuery, useLogoutAdminUserMutation } = adminUserApi;
