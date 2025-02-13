import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Addblog from "./pages/blog/Addblog";
import Login from "./pages/auth/Login";
import Editblog from "./pages/blog/Editblog";
import Individualpage from "./pages/blog/Individualpage";
import React from "react";
import { Toaster } from "react-hot-toast";
import {Provider} from 'react-redux'
import store from "../store/store";

function App() {
  return (
    <>
      <Toaster position="top-center"  reverseOrder={false} />
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/add" element={<Addblog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/edit" element={<Editblog />} />
          <Route path="blog/:id" element={<Individualpage />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
