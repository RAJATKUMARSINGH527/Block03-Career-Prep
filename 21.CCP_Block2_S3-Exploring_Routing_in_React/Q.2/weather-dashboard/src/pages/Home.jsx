import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${encodeURIComponent(city.trim())}`);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
