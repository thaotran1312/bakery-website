import React, { useState, useEffect } from 'react';
import cakes from '../data/cakes.json';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';

const ProductList = () => {
  const [filters, setFilters] = useState({
    search: '',
    sort: '',
    category: ''
  });

  const [filtered, setFiltered] = useState(cakes);

  const uniqueCategories = Array.from(
    new Set(cakes.flatMap(cake => cake.category))
  );

  useEffect(() => {
    let result = cakes;

    if (filters.search) {
      result = result.filter(cake =>
        cake.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      result = result.filter(cake =>
        cake.category.includes(filters.category)
      );
    }

    if (filters.sort === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <FilterBar filters={filters} setFilters={setFilters} categories={uniqueCategories} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
