import { configureStore } from '@reduxjs/toolkit';
import { adminUserApi } from './api/admin/adminUserApi';
import appStateReducer from './reducers/appState';

const store = configureStore({
  reducer: {
    [adminUserApi.reducerPath]: adminUserApi.reducer,
    [appStateReducer.name]: appStateReducer.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([adminUserApi.middleware]),
});

export { store };
