import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Store your key in .env

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Please enter a movie title.');
      setMovies([]);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'Movie not found');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Movie Search App</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              cursor: 'pointer',
              width: '150px',
              textAlign: 'center',
            }}
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          >
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x220?text=No+Image'}
              alt={movie.Title}
              style={{ width: '150px', height: '220px', objectFit: 'cover' }}
            />
            <p><strong>{movie.Title}</strong></p>
            <p>({movie.Year})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
