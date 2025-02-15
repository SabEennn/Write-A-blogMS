import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { register, setStatus } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import statuses from "../../../globals/status/statuses";


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
    }
  }, [status]);

  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
