import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    window.location.reload();
  };

  // Update searchQuery state on input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/assets/Logos/logo.png"
                className="h-8"
                alt="Flowbite Logo"
              />
            </Link>
          </div>

          {/* Search Bar - Always visible */}
          <div className="flex-1 flex justify-center px-4">
            <div className="w-full max-w-xs sm:max-w-sm relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Desktop Nav Menu */}
          <div className="flex-shrink-0">
            <div className="hidden md:block">
              {isLoggedin ? (
                <ul className="flex space-x-8 font-medium">
                  <li>
                    <Link
                      to="/blog/add"
                      className="block py-2 px-3 text-blue-700 hover:text-blue-800 md:p-0 md:dark:text-blue-500"
                    >
                      Create Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handlelogout}
                      to="/login"
                      className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="flex space-x-8 font-medium">
                  <li>
                    <Link
                      to="/blog/add"
                      className="block py-2 px-3 text-blue-700 hover:text-blue-800 md:p-0 md:dark:text-blue-500"
                    >
                      Create Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                    >
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleMobileMenu}
                aria-controls="navbar-default"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
          {/* Mobile Navigation Links */}
          {isLoggedin ? (
            <ul className="flex flex-col items-end space-y-2 font-medium border-t border-gray-200 dark:border-gray-700 pt-4">
              <li>
                <Link
                  to="/blog/add"
                  className="block py-2 px-3 text-blue-700 hover:text-blue-800 hover:bg-gray-50 rounded dark:text-blue-500 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handlelogout();
                    setIsMobileMenuOpen(false);
                  }}
                  to="/login"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col items-end space-y-2 font-medium border-t border-gray-200 dark:border-gray-700 pt-4">
              <li>
                <Link
                  to="/blog/add"
                  className="block py-2 px-3 text-blue-700 hover:text-blue-800 hover:bg-gray-50 rounded dark:text-blue-500 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;