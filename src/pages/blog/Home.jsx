import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/navbar/layout/Layout";
import Card from "./components/card/Card";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap" >
        <Card />
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
