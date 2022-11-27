import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsCard = () => {

  const products = useLoaderData();

  return (
    <div>
      <h2>All products: {products.length}</h2>
    </div>
  );
};

export default ProductsCard;