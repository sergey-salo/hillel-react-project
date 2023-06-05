import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    login: (state) => {
      return state = true;
    },
    logout: (state) => {
      return state = false;
    },
  },
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;