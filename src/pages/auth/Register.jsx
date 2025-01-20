import React from "react";
import Form from "./components/form/Form";
import axios from "axios";

const Register = () => {
  const handleRegiser = async (data) => {
    const response = await axios.post(
      "https://wwww.react30.onrender.com/api/user/register",
      data
    );
  };

  return <Form type="register" onSubmit={handleRegiser} />;
};

export default Register;
