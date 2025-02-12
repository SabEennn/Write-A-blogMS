import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../config";
import toast from "react-hot-toast";

const Register = () => {
  const nagivate = useNavigate();
  const handleRegiser = async (data) => {
    try {
      const response = await axios.post(`${baseurl}/register`, data);
      if (response.status >= 200 && response.status <= 299) {
        nagivate("/login");
        console.log(response);
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return <Form type="register" onSubmit={handleRegiser} />;
};
export default Register;
