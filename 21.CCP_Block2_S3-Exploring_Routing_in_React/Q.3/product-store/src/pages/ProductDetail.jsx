import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch product details');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem', maxWidth: '700px', margin: 'auto' }}>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Products
      </Link>

      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>

      {product.images && product.images.length > 1 && (
        <>
          <h3>More images:</h3>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title} - ${idx + 1}`}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '6px' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
