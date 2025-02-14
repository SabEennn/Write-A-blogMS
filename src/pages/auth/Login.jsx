import React, { useState } from "react";
import Form from "./components/form/Form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (data) => {

    try {
      const response = await dispatch(login(data));
      if(response.status === 200){
        toast(response?.data?.message)
      }
      navigate("/"); 
    } catch (error) {
      toast.error(error?.data?.message);
    } 
  };

  return (
    <>
      <Toaster />
      <Form type="login" onSubmit={handleLogin} disabled={loading} />
    
    </>
  );
};

export default Login;
