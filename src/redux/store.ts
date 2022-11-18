import { configureStore } from '@reduxjs/toolkit';
import { adminUserApi } from './api/admin/adminUserApi';

const store = configureStore({
  reducer: {
    [adminUserApi.reducerPath]: adminUserApi.reducer,
    [adminUserApi.reducerPath]: adminUserApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([adminUserApi.middleware]),
});

export { store };
