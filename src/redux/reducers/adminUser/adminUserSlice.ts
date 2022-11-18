import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminUserState, IAdminUser } from './types';

const initialState: IAdminUserState = {
  adminUser: null,
};

export const adminUserSlice = createSlice({
  initialState,
  name: 'adminUserSlice',
  reducers: {
    logoutAdmin: () => initialState,
    setAdminUser: (state, action: PayloadAction<IAdminUser>) => {
      state.adminUser = action.payload;
    },
  },
});

export default adminUserSlice.reducer;

export const { logoutAdmin, setAdminUser } = adminUserSlice.actions;
