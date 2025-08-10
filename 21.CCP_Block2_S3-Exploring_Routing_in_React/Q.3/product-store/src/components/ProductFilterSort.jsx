import React from 'react';

function ProductFilterSort({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortOrderChange
}) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
      <div>
        <label htmlFor="category-select">Filter by category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={e => onCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort-select">Sort by price: </label>
        <select
          id="sort-select"
          value={sortOrder}
          onChange={e => onSortOrderChange(e.target.value)}
        >
          <option value="none">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilterSort;
