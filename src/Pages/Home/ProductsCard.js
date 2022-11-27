import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNow from '../BookNow/BookNow';
import Product from './Product';

const ProductsCard = () => {

  const products = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);

  return (
    <div className='grid lg:grid-cols-2 lg:w-2/3 gap-6 mt-16 mx-auto'>
      {
        products.map(product => <Product
          key={product._id}
          product={product}
          setBookingProduct={setBookingProduct}
        ></Product>)
      }
      {
        bookingProduct &&
        <BookNow
          bookingProduct={bookingProduct}
        ></BookNow>}
    </div>
  );
};

export default ProductsCard;