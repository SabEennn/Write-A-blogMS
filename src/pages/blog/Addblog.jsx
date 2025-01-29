import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { baseurl } from "../../config";
import axios from "axios";

const Addblog = (data) => {
  const handleCreateBlog = async () => {
    const response = await axios.post(`${baseurl}/blog`, data, {
      headers: {
        "Content-Type": "/multipartformdata",
        "Authorization": localStorage.getItem(response.data.token),
      },
    });

    console.log(response.message);
  };

  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default Addblog;
