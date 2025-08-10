import React, { useState, useEffect } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch a quote
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      setQuote({ content: 'Failed to fetch quote. Please try again.', author: '' });
    }
    setLoading(false);
  };

  // Fetch quote on component mount and every 30 seconds
  useEffect(() => {
    fetchQuote();
    const intervalId = setInterval(fetchQuote, 30000); // 30000 ms = 30 seconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px',
      textAlign: 'center', fontFamily: 'Arial, sans-serif',
      background: '#f9f9f9',
    }}>
      {loading ? (
        <div style={{ marginBottom: '1rem' }}>
          <div 
            style={{
              border: '4px solid #ccc',
              borderTop: '4px solid #333',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              margin: '0 auto',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>
      ) : (
        <>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#333' }}>
            "{quote?.content}"
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '0.5rem', color: '#555' }}>
            - {quote?.author}
          </p>
        </>
      )}

      <button
        onClick={fetchQuote}
        disabled={loading}
        style={{
          marginTop: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: 'none',
          background: '#333',
          color: '#fff',
          fontWeight: 'bold',
          opacity: loading ? 0.6 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        Get New Quote
      </button>

      {/* CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}

export default QuoteGenerator;
