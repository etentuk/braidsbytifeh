import { configureStore } from '@reduxjs/toolkit';
import { adminUserApi } from './api/admin/adminUserApi';
import adminUserReducer from './reducers/adminUser/adminUserSlice';

const store = configureStore({
  reducer: {
    [adminUserApi.reducerPath]: adminUserApi.reducer,
    [adminUserApi.reducerPath]: adminUserApi.reducer,
    adminUserState: adminUserReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([adminUserApi.middleware]),
});

export { store };
