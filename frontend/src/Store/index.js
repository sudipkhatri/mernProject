import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      state.error = action.payload;
      state.isLoggedIn = true;
    },
    logout(state, action) {
      localStorage.removeItem("userId");
       localStorage.removeItem("token");
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
