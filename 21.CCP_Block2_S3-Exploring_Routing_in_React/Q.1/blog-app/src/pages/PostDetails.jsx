import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams(); // get post id from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch post details');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post details...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>
        <strong>Tags: </strong>
        {post.tags && post.tags.length > 0 ? (
          post.tags.map(tag => (
            <span key={tag} style={{ marginRight: '0.5rem', color: 'gray' }}>
              #{tag}
            </span>
          ))
        ) : (
          <span>No tags</span>
        )}
      </div>
      <p><Link to="/" style={{ color: 'blue' }}>← Back to Home</Link></p>
    </div>
  );
}

export default PostDetails;
