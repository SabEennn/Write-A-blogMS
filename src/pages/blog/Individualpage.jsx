import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../config";

const Individualpage = ({}) => {
  let { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState({});
  const fetchSingleBlog = async () => {
    if (!id || id.length !== 24) {
      console.error("Invalid ID:", id);
      return;
    }
  
    try { 
      const response = await axios.get(`${baseurl}/blog/${id}`);
      if (response.status === 200) {  
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error.response?.data?.message || error.message);
    }
  };
  
  useEffect(() => {
    // fetchSingleBlog();
  }, []);

  return (
    <Layout>
      <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
    <div class="relative">
        <img class="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/>
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-medium mb-2">Product Title</h3>
        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
            vel eros fermentum faucibus sit amet euismod lorem.</p>
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg">$19.99</span>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
        </div>
    </div>
</div>
    </Layout>
  );
};

export default Individualpage;
