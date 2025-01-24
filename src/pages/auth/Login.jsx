import React from 'react'
import Form from './components/form/Form'
import axios from 'axios';


const Login = () => {
  const handleLogin = async (data)=>{
    console.log('hello there from login page');
    const result = await axios.post("https://www.react30.onrender.com/api/user/login",data);
    console.log(result);
  }
  return (
          <>
          <Form type='login' onSubmit={handleLogin}/>
          </>

        )
      }
      
export default Login