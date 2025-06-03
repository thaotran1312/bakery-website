import React from 'react';

const FilterBar = ({ filters, setFilters, categories }) => {
  const handleInputChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters(prev => ({
      ...prev,
      category: value
    }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Tìm theo tên..."
        name="search"
        value={filters.search}
        onChange={handleInputChange}
        className="border px-3 py-1 rounded"
      />
      <select name="sort" value={filters.sort} onChange={handleInputChange} className="border px-3 py-1 rounded">
        <option value="">Sắp xếp theo giá</option>
        <option value="asc">Tăng dần</option>
        <option value="desc">Giảm dần</option>
      </select>
      <select name="category" value={filters.category} onChange={handleCategoryChange} className="border px-3 py-1 rounded">
        <option value="">Tất cả danh mục</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
