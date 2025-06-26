import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import store from "../store/store";
import Protected from "./Protected";

const Home = lazy(() => import("./pages/blog/Home"));
const Register = lazy(() => import("./pages/auth/Register"));
const Addblog = lazy(() => import("./pages/blog/Addblog"));
const Login = lazy(() => import("./pages/auth/Login"));
const Editblog = lazy(() => import("./pages/blog/Editblog"));
const Individualpage = lazy(() => import("./pages/blog/Individualpage"));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>
);

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blog/add" element={<Protected><Addblog /></Protected>} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog/edit" element={<Protected><Editblog /></Protected>} />
              <Route path="blog/:id" element={<Individualpage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
