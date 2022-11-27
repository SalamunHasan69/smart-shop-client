import React from 'react';
import { FaCheckCircle } from "react-icons/fa";


const Product = ({ product }) => {

  const { name, postTime, location, image, pTitle, price, marketPrice, use } = product;

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-blue-100 ">
      <div className="flex space-x-4">
        <div className="flex flex-col space-y-1">
          <div className='flex items-center gap-2'>
            <h4 className="text-2xl text-black font-semibold">{name}</h4>
            <FaCheckCircle className='text-primary'></FaCheckCircle>
          </div>
          <span className="text-xs font-bold">Listed {postTime} in {location}</span>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="object-cover w-full mb-4 dark:bg-gray-500" />
        <h2 className="mb-1 text-xl text-black font-bold">{pTitle}</h2>
        <h3 className="text-xl font-semibold">Price: {price}</h3>
        <p className='mb-2'>{use} used</p>
        <small className='font-bold'>Market price: {marketPrice}</small>
      </div>
      <button className="btn btn-primary">Book now</button>
    </div>
  );
};

export default Product;