import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { baseurl } from "../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseurl}/blog`);
  
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            console.log(blog);
            return <Card key={blog._id} blog={blog} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
