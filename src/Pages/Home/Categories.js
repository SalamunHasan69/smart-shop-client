import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  })

  return (
    <div>
      <h2 className='text-4xl font-bold text-center mb-6'>Popular Categories</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          categories.map(category => <CategoryCard
            key={category._id}
            category={category}
          ></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Categories;