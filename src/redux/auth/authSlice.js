import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersCurrent, logIn, logOut, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggein: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggein = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggein = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggein = false;
      })
      .addCase(fetchUsersCurrent.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggein = true;
      }),
});

export const authReducer = authSlice.reducer;
