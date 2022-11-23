import React from 'react';
import Achievement from './Achievement';

const Achievements = () => {

  const achievements = [
    {
      id: 1,
      name: '1697 Sellers',
      icon: 'https://thedestinyformula.com/wp-content/uploads/2018/08/types-od-seller.jpg'
    },
    {
      id: 2,
      name: '21354+ Products',
      icon: 'https://geocheminspection.com/public/img/services/final.png'
    },
    {
      id: 3,
      name: '95% Happy Buyers',
      icon: 'https://blog.bizvibe.com/wp-content/uploads/2020/01/types-of-buyers-in-B2B.jpg'
    },
  ]

  return (
    <>
      <h3 className='text-primary text-3xl font-semibold text-center my-5'>Our Achievements</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          achievements.map(achievement => <Achievement
            key={achievement}
            achievement={achievement}
          ></Achievement>)
        }
      </div>
    </>
  );
};

export default Achievements;