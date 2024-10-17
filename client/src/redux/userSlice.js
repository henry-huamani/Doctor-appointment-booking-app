import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state , action) => {
      state.user = action.payload;
    },
    cleanUser: (state) => {
      state.user = null;
    }
  },
});

export const { cleanUser, setUser , reloadUserData } = userSlice.actions;