import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { baseurl } from "../../config";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseurl}/blog`);
      if (response.status === 200) {
        setBlogs(response.data.data);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs by search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div className="text-red-500 text-center p-4">{error}</div>
      </Layout>
    );
  }

  return (
    <>
      {/* Pass search state to Navbar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Layout>
        <div className="flex flex-wrap">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <Card key={blog._id} blog={{...blog , searchQuery}} />)
          ) : (
            <div className="w-full h-[80vh] flex justify-center items-center p-4">No blogs found</div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
