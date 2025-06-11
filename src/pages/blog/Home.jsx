import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { baseurl } from "../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseurl}/blog`);
      if (response.status === 200) {
        setBlogs(response.data.data);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-wrap">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Card key={blog._id} blog={blog} />
          ))
        ) : (
          <div className="w-full text-center p-4">
            No blogs found
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
