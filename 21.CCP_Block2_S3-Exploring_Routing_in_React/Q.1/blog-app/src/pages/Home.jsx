import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Case-insensitive filtering by title
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '400px'
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredPosts.length === 0 ? (
          <li>No posts found.</li>
        ) : (
          filteredPosts.map(post => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                <strong>{post.title}</strong>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Home;
