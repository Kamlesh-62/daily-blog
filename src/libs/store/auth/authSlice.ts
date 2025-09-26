import { createSlice } from "@reduxjs/toolkit";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthState {
  user: user | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

