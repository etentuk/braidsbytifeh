import { createSlice } from '@reduxjs/toolkit';
import { IAppState } from './appState.types';

const theme = localStorage.getItem('theme') ?? 'light';

const initialAppState: IAppState = {
  theme: theme as 'light' | 'dark',
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState: { ...initialAppState },
  reducers: {
    updateAppStateTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { updateAppStateTheme } = appStateSlice.actions;
export default appStateSlice;
