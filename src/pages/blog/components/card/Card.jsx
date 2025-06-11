import React from "react";
import { Link } from "react-router-dom";

const Card = ({blog}) => {
  return (
    <Link to={`/blog/${blog._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {blog.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {blog.subtitle}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
