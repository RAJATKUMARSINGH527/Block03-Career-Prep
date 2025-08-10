import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3 style={{ margin: '0.5rem 0' }}>{product.title}</h3>
      <p style={{ flexGrow: 1 }}>{product.description.substring(0, 60)}...</p>
      <p><strong>Price: </strong>${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        style={{
          marginTop: 'auto',
          textAlign: 'center',
          padding: '0.4rem',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
