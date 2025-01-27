import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";

const Addblog = (data) => {
  const handleCreateBlog =() =>{

  }

  return (
    <Layout>
      <Form type="Create" onSubmit='handleCreateBlog'/>
    </Layout>
  );
};

export default Addblog;
