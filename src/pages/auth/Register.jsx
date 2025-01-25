import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const baseurl = import.meta.env.VITE_BASE_URL
  const nagivate = useNavigate()
  const handleRegiser = async (data) => {
    try {
      const response = await axios.post(
        `${baseurl}/register`,
        data
      );
      if(response.status >= 201 && response.status <= 299){
        nagivate('/login')
      }
      else{
        alert('registration failed');
      }

      console.log(response.status);
    } catch (error) {
      alert(error?.response?.data?.message);
      // alert("failed to register, please try again later")
    }

  };

  return <Form type="register" onSubmit={handleRegiser} />;
};
export default Register;
