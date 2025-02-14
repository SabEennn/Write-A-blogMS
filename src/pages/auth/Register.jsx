import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../../store/authSlice";

const Register = (data) => {
  const dispatch = useDispatch()
  const handleRegister = () =>{
  const response =  dispatch(register(data))

 try {
   if(response.status=== 200){
     toast(reponse?.data?.message)
   }
   else{
     toast(response?.data?.message)
   }
 } catch (error) {
  toast(response?.data?.message)
 }
  }

  return <Form type="register" onSubmit={handleRegister} />;
};
export default Register;
