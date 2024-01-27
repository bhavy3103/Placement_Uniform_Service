import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isAuthenticated = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
