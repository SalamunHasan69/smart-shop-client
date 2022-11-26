import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div>
      {
        products?.map(product => <ProductsCard
          key={product.id}
          product={product}
        ></ProductsCard>)
      }
    </div>
  );
};

export default Products;