import React from 'react'
import Form from './components/form/Form'


const Login = () => {
  const handleLogin =(data)=>{
    console.log(data,'hello there from login page');
  }
  return (
          <>
          <Form type='login' onSubmit={handleLogin}/>
          </>

        )
      }
      

export default Login