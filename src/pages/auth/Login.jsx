import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../config";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async (data) => {
    try {
      const result = await axios.post(
        `${baseurl}/login`,
        data
      );
      console.log(result.status);
      if(result.status === 200){
        toast.success(result.data.message)

        localStorage.setItem('token',result.data.token)
        navigate('/');
      }
      else{
        console.log('login failed');
      }
    }
     catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error.message);
    }
  };
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
