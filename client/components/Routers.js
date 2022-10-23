import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Play from './Layout';
import Home from './Home';
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/leaderboard" element={<Leaderboard />}></Route>
      {/* <Route exact path="/play" element={<Play />}></Route> */}
      <Route exact path="/*">
        Page not found..
      </Route>
    </Routes>
  );
};

export default Routers;
