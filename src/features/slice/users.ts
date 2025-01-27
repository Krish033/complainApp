// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      localStorage.getItem("user") != null
        ? JSON.parse(localStorage.getItem("user"))
        : initialState,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null; // Clear user details
      localStorage.removeItem("user");
    },

    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; // Update user details
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;