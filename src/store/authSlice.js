import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInfo } = authSlice.actions;

export default authSlice.reducer;
