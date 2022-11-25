import React from 'react';

const Banner = () => {
  return (
    <section>
      <div className="bg-blue-100">
        <div className="container flex flex-col items-center px-4 py-4 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Most Awaited Winter Sale Is Here!</h1>
          <p className="my-6 text-xl lg:text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-900">Get latest brands used smartphone with best price.</p>
        </div>
      </div>
      <img src="https://dazeinfo.com/wp-content/uploads/2021/05/top-selling-smartphone-models-2021.jpeg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
    </section>
  );
};

export default Banner;