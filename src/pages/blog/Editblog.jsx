import React from "react";
import Form from "./components/form/Form";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import axios from "axios";

const Editblog = () => {
  const token = localStorage.getItem('jwt');
  if(!token){
    window.location.href = '/login'; 
  }
  const handleSubmit = async (formData) => {
    try{
      const response = await axios.post("https://onrender.com/api/user/edit", formData);

      if (response.status === 200) {
        toast.success("Blog edited successfully!");
      } else {
        toast.error("Failed to edit blog.");
      }
      console.log(response.data);  
    } catch (error) {
      console.error("Edit failed:", error.response?.data || error.message);
    }
  };

  return (
    <Layout>
      <Form type="Edit" onSubmit={handleSubmit} />
    </Layout>
  );
};

export default Editblog;
