import axios from 'axios';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SinglePlayer = () => {
  // console.log(selectedPlayer);
  return (
    <>
      {/* <div>Singleplayer</div>;<p>Name:{props.selectedPlayer.playerId}</p>
      <p>Result:{props.selectedPlayer.result}</p> */}
      <p>Single Player information</p>
      <Link to="/leaderboard">Back to Players</Link>
    </>
  );
};

export default SinglePlayer;
