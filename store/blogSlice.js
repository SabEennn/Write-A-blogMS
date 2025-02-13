import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "",
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

export const { setStatus, setToken, setUser } = blogSlice.actions;
export default authSlice.reducers;

function register(data) {
  return async function registerThunk(dispatch) {
    
    try {
      const response = await axios.get("https://onrender.com/api/user", data);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function login(data) {
  return function loginThunk(dispatch) {
    try {
      const response = axios.get("https://onrender.com/api/user");
      console.log(response);
      if(response.status === 200){
        
      }
    } catch (error) {
        console.log(error.message);
    }

  };
}
