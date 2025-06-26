import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { register, setStatus } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import statuses from "../../../globals/status/statuses";
import toast from "react-hot-toast";


const Register = () => {
  const { status } = useSelector((state) => state.auth);
  console.log(status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    console.log(status);
    
    if (status === statuses.SUCCESS) {
      navigate("/login");
      dispatch(setStatus(null));
      toast.success('Registration Successfull')

    }
  }, [status]);

  return <Form type="register" onSubmit={handleRegister} />;
};

export default Register;