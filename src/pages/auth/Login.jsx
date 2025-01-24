import React from "react";
import Form from "./components/form/Form";
import axios from "axios";

const Login = () => {
  const handleLogin = async (data) => {
    try {
      const result = await axios.post(
        "https://react30.onrender.com/api/user/login",
        data
      );
    }
     catch (error) {
      console.log(error.message);
      alert("login went unsuccessful, try again later");
    }
  };
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
