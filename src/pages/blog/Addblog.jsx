import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { baseurl } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Addblog = (data) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt')

  if(!token){
      navigate('/login')

    }
  const handleCreateBlog = async (formData) => {
    try {
      const response = await axios.post(`${baseurl}/blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem('jwt'),
        },
      })
      console.log(response);
      
      if(response.status === 201){
        navigate('/')
        toast.success(response.data.message);
      }
      else{
        alert('something went wrong')
      }

      console.log(response.data.message);
    } catch (error) {

      toast.error(error.message)
    }
  };
   

  return (

    <Layout>
      <Form type="Create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default Addblog;
