import axios from 'axios';
import React from 'react';

const SinglePlayer = (props) => {
  return (
    <>
      <div>Singleplayer</div>;<p>Name:{props.selectedPlayer.playerId}</p>
      <p>Result:{props.selectedPlayer.result}</p>
    </>
  );
};

export default SinglePlayer;
