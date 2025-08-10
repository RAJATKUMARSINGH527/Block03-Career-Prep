import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || 'Movie details not found.');
        }
      } catch (err) {
        setError('Failed to fetch movie details. Please try again.');
      }
      setLoading(false);
    }
    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!movie) return null;

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        &larr; Back to Search
      </Link>

      <h1>{movie.Title} ({movie.Year})</h1>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.Title}
        style={{ width: '300px', height: '450px', objectFit: 'cover' }}
      />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
