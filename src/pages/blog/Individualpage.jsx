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
        // Check if current user is the author (you'll need to implement user auth check)
        // setIsAuthor(checkIfCurrentUserIsAuthor(response.data.data.userId));
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-4">
              {/* Author avatar placeholder */}
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-lg">
                  {blog.userId?.username ? blog.userId.username[0].toUpperCase() : 'A'}
                </span>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    {blog.userId?.username || 'Anonymous'}
                  </span>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Follow
                  </button>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span>·</span>
                  <span>{getReadingTime(blog.description)}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              {/* Social share buttons */}
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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

        {/* Article footer */}
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

          {/* Engagement section */}
          <div className="flex items-center justify-between py-6 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">23</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">5</span>
              </button>
            </div>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          {/* Author bio section */}
          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-gray-600 font-medium text-xl">
                  {blog.userId?.username ? blog.userId.username[0].toUpperCase() : 'A'}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {blog.userId?.username || 'Anonymous'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.userId?.bio || 'Writer and thinker sharing insights on various topics.'}
                </p>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
};

export default Individualpage;