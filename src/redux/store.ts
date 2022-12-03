import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { adminUserApi } from './api/admin/adminUserApi';
import appStateReducer from './reducers/appState';
import { RootState } from './utils/redux.types';

const rootReducer = combineReducers({
  [adminUserApi.reducerPath]: adminUserApi.reducer,
  [appStateReducer.name]: appStateReducer.reducer,
});

// TODO: Persist state with Redux-Persist
const setupStore = (preloadedState?: PreloadedState<RootState>): any => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([adminUserApi.middleware]),
  });
};

export { setupStore, rootReducer };
