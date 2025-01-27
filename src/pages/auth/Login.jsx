import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../config";
 
const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async (data) => {
    try {
      const result = await axios.post(
        `${baseurl}/login`,
        data
      );
      console.log(result.status);
      if(result.status >= 200 && result.status <=299){
        navigate('/');
      }
      else{
        console.log('login failed');
      }
    }
     catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
