import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

  const { image, pTitle, location } = useLoaderData();

  return (
    <div>
      {image}
      {pTitle}
      {location}
    </div>
  );
};

export default Products;