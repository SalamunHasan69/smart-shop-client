import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

  const { data: addProduct } = useQuery({
    queryKey: ['addProduct'],
    queryFn: async () => {
      try {
        const res = await fetch('https://smart-shop-server.vercel.app/addProduct', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  })

  return (
    <div>
      <h3 className='text-3xl my-4'>My products: </h3>
    </div>
  );
};

export default MyProducts;