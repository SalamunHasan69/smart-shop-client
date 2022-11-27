// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import ProductsCard from './ProductsCard';

// const Products = () => {

//   // const [products, setProducts] = useState();

//   // useEffect(() => {
//   //   fetch('http://localhost:5000/products')
//   //     .then(res => res.json())
//   //     .then(data => setProducts(data))
//   // }, []);
//   const products = useLoaderData();

//   return (
//     <div>
//       <h2>Hello: {products.length}</h2>
//       {
//         products?.map(product => <ProductsCard
//           key={product.id}
//           product={product}
//         ></ProductsCard>)
//       }
//     </div>
//   );
// };

// export default Products;