import {createSlice} from "@reduxjs/toolkit"

const blogSlice = createSlice({
   name: '',
   initialState:{
    data:"",
    status:"",
    token:"",
   },

   reducers:{
    setUser(state, action){
        state.data = action.payload
    },
    setToken(state, action){
        state.token = action.payload
    },
    setStatus(state, action){
        state.status = action.payload
    }
   }

})

const {setStatus, setToken, setUser} = blogSlice.actions