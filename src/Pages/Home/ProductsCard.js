import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsCard = () => {

  const { image, pTitle, location } = useLoaderData();

  return (
    <div>
      <img src={image} alt="" />
      <h3>{pTitle}</h3>
      <p>{location}</p>
    </div>
  );
};

export default ProductsCard;