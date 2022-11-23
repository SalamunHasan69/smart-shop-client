import React from 'react';

const Achievement = ({ achievement }) => {

  const { name, icon, } = achievement;

  return (
    <div>
      <div className='card bg-blue-100 shadow-xl'>
        <figure className="px-10 pt-10 rounded-full">
          <img src={icon} alt="" className="w-16 h-16 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Achievement;