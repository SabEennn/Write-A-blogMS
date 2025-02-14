import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import statuses from "../globals/status/statuses";
import toast from "react-hot-toast";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: null,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await axios.post("https://react30.onrender.com/api/user/register", data);

      if (response.status === 200) {
        toast(response?.message?.data)
        dispatch(setUser(data));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  };
}

export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const response = await axios.post("https://react30.onrender.com/api/user/login", data);
      if (response.status === 200) {
        toast(response?.message?.data)
        dispatch(setToken(response?.data?.token));
        dispatch(setStatus(statuses.SUCCESS));
      } else {
        dispatch(setStatus(statuses.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
