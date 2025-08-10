import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilterSort from '../components/ProductFilterSort';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('none'); // 'asc', 'desc', or 'none'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all categories on mount
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
      .catch(err => {
        console.error('Failed to fetch categories:', err);
      });
  }, []);

  // Fetch products (all or by category)
  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = selectedCategory === 'all'
      ? 'https://dummyjson.com/products?limit=0' // fetch all products, no limit
      : `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        const fetchedProducts = data.products || data;
        setProducts(fetchedProducts);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  // Sort products by price when sortOrder changes
  const sortedProducts = React.useMemo(() => {
    if (sortOrder === 'none') return products;
    const sorted = [...products].sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      else return b.price - a.price;
    });
    return sorted;
  }, [products, sortOrder]);

  return (
    <div style={{ padding: '1rem', maxWidth: '1000px', margin: 'auto' }}>
      <h1>Product Store</h1>

      <ProductFilterSort
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {!loading && !error && sortedProducts.length === 0 && (
          <p>No products found.</p>
        )}
        {!loading && !error && sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
