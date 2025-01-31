import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { baseurl } from "../../config";

const Home = () => {
  const [blogs, setBlogs] = useEffect([])
  const fetchBlogs =async () =>{
  const response =await axios.get(`${baseurl}/blogs`);
  console.log(response);
  }

  useEffect( ()=>{
    fetchBlogs();
  }, [])
  return (
    <Layout>
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
