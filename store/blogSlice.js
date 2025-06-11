import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: "",
    status: "",
    token: "",
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

// Export actions
export const { setStatus, setToken, setUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

// 2. Thunk: Register
export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus("loading"));
    try {
      const response = await axios.post("https://onrender.com/api/user/register", data);
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setStatus("success"));
      }
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };
}

// 3. Thunk: Login
export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus("loading"));
    try {
      const response = await axios.post("https://onrender.com/api/user/login", data);
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setStatus("success"));
      }
    } catch (error) {
      console.error(error);
      dispatch(setStatus("failed"));
    }
  };
}
