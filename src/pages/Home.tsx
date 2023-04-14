/** @format */

import React from 'react';
import { Game } from '../components/Game';
import { UserArray } from '../components/UserArray';

const Home = () => {
  return (
    <div className="wrapper">
      <Game />
      <UserArray />
    </div>
  );
};

export default Home;
