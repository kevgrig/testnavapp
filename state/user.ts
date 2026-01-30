import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isMainDomain: boolean;
  loggedIn: boolean;
};

const initialState: UserState = {
  isMainDomain: false,
  loggedIn: false,
} satisfies UserState as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, newState: PayloadAction<boolean>) => {
      state.loggedIn = newState.payload;
    },
  },
});

export const {
  setLoggedIn,
} = userSlice.actions;

export default userSlice.reducer;
