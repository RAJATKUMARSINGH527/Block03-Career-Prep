import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function WeatherDetails() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!res.ok) throw new Error('City not found');

        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!weatherData) return null;

  const { main, weather, name, coord } = weatherData;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Weather in {name}</h1>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Condition: {weather[0].description}</p>

      <h3>Location Map</h3>
      <div style={{ width: '100%', maxWidth: 600, height: 400 }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${coord.lat},${coord.lon}&zoom=10`}
        />
      </div>

      <p style={{ marginTop: '1rem' }}>
        <Link to="/" style={{ color: 'blue' }}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}

export default WeatherDetails;
