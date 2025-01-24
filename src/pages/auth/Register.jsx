import React from "react";
import Form from "./components/form/Form";
import axios from "axios";

const Register = () => {
  const handleRegiser = async (data) => {
    try {
      const response = await axios.post(
        "https://wwww.react30.onrender.com/api/user/register",
        data
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
      // alert("failed to register, please try again later")
    }

  };

  return <Form type="register" onSubmit={handleRegiser} />;
};
export default Register;
