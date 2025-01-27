import React, { useState } from 'react';
import axios from 'axios';

const DeleteBlogPage = ({ blogId, onDeleteSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.delete(`/api/blogs/${blogId}`);
      
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete the blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="delete-blog-page">
      <h1>Delete Blog</h1>
      <p>Are you sure you want to delete this blog post?</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete Blog'}
      </button>
    </div>
  );
};

export default DeleteBlogPage;
