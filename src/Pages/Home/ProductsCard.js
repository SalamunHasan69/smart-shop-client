import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const ProductsCard = () => {

  const products = useLoaderData();
  // const { name, } = products;

  return (
    <div className='grid lg:grid-cols-2 lg:w-2/3 gap-6 mt-16 mx-auto'>
      {
        products.map(product => <Product
          key={product._id}
          product={product}
        ></Product>)
      }
    </div>
  );
};

export default ProductsCard;