import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "./components/button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../config";

const Individualpage = ({}) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  const deletesingleblog = async () => {
    try {
      const delresponse = await axios.delete(`${baseurl}/blog/${id}`,{
		headers:{
			'Authorization': localStorage.getItem('token')
		}
	  });
      console.log("Delete response:", delresponse);
      if (delresponse.status === 200) {
		navigate('/')
       }  
    } catch (error) {
      console.error(
        "Error deleting blog:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(`${baseurl}/blog/${id}`);

      if (response.status === 200) {
        setBlog(response.data.data);
      }
    } catch (error) {
      // console.log(error.message);
    }
  };
  useEffect(() => {
    fetchSingleBlog();
  }, []);

  return (
    <Layout>
      <section className="py-6 text-blue-900 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
          <div class="bg-gray-100 dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                  <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      class="w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                      alt="Product Image"
                    />
                  </div>
                 
                </div>
                <div class="md:flex-1 px-4">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {blog.title}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {blog.subtitle}
                  </p>
                 
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
						{blog.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/blog/edit">
            <Button type="Edit" />
          </Link>

          <Button type="Delete" onClick={()=>{deletesingleblog()}} />
        </div>
      </section>
    </Layout>
  );
};

export default Individualpage;
