// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  activeMenu: "Dashboard",
};

const navigationSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },

    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setActiveMenu, setIsOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
