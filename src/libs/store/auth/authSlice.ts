import { createSlice } from "@reduxjs/toolkit";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean,
  user: user | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
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
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  },
});

export const { login, logout, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;

