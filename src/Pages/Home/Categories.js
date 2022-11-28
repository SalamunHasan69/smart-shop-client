import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Categories = () => {

  // const [categories, setCategories] = useState([]);
  const products = useLoaderData([])

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://smart-shop-server-salamunhasan69.vercel.app/categories');
      const data = await res.json();
      return data;
    }
  })

  // useEffect(() => {
  //   fetch('https://smart-shop-server-salamunhasan69.vercel.app/categories')
  //     .then(res => res.json())
  //     .then(data => setCategories(data))
  // });

  return (
    <div>
      <h2 className='text-4xl font-bold text-center mb-6'>Popular Categories</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          categories.map(category => <CategoryCard
            key={category._id}
            category={category}
            products={products}
          ></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Categories;