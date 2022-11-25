import React from 'react';
import Achievements from './Achievements';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Achievements></Achievements>
    </div>
  );
};

export default Home;