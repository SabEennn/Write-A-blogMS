import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "./components/button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../config";

const Individualpage = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAuthor, setIsAuthor] = useState(false);

  const deletesingleblog = async () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const delresponse = await axios.delete(`${baseurl}/blog/${id}`, {
          headers: {
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
    }
  };

  const fetchSingleBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseurl}/blog/${id}`);

      if (response.status === 200) {
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (text) => {
    if (!text) return '1 min read';
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  if (!blog.title) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to posts
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>
          
          {blog.subtitle && (
            <h2 className="text-xl sm:text-2xl text-gray-600 font-normal mb-8 leading-relaxed">
              {blog.subtitle}
            </h2>
          )}

          {/* Author info and meta */}
          <div className="flex items-center justify-between border-t border-b border-gray-400 border-1 py-3">
            <div className="flex items-center space-x-4">
              {/* Author avatar placeholder */}
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-lg">
                  {blog.userId?.username ? blog.userId.username[0].toUpperCase() : 'A'}
                </span>
                
              </div>
              
              <div>
                <div className="flex items-center space-x-5 font-[serif] text-xl">
                  <span className="font-medium text-gray-900 text-xl">
                    {blog.userId?.username || 'Anonymous'}
                  </span>
                  <span className="text-[#1E40AF] text-base">{getReadingTime(blog.description)}</span>
                  
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <span className="text-sm">{formatDate(blog.userId.createdAt)}</span>
                  <span>·</span>
                  
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              {/* Social share buttons */}
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                 Follow
                </button>
              </div>

              {/* Author actions */}
              {isAuthor && (
                <div className="flex space-x-2">
                  <Link 
                    to={`/edit/${id}`}
                    className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={deletesingleblog}
                    className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed text-lg">
            {blog.description?.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          {/* Tags section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </footer>
      </article>
    </Layout>
  );
};

export default Individualpage;