import React from 'react';
import Form from '../blog/components/form/Form'; // Adjust the path if Form is in a different folder
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { baseurl } from '../../config';

const Addblog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(`${baseurl}/blog`, data, {
        headers: {
          'Authorization': localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Blog submitted successfully:', response.data);
        toast.success('blog created successfully')
        navigate('/'); // Redirect to homepage or blog list
      }
    } catch (error) {
      console.error('Error submitting blog:', error.response?.data || error.message);
    }
  };

  return (
    <Form type="Add" onSubmit={handleSubmit} />
  );
};

export default Addblog;
