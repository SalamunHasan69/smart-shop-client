import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ category }) => {

  const { id, img, title } = category;

  return (
    <div className="max-w-lg p-4 shadow-md bg-blue-100">
      <div className="space-y-4">
        <div className="space-y-2">
          <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 " />
        </div>
      </div>
      <div className="space-y-2 mt-4 flex justify-between items-center">
        <h3 className="mb-0 capitalize text-3xl">{title}</h3>
        <Link to={`/products/${id}`} className='text-primary text-2xl font-bold' >
          <FaArrowRight></FaArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;