import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";

const SinglePlayer = ({ players, selectedPlayer }) => {
  const { playerId } = useParams();
  const myPlayer = players.find((player) => player.id === playerId * 1) || {};

  // console.log(selectedPlayer, "Actually single player nowww");
  // const games = selectedPlayer.games;
  // console.log(games, "GAMESSSSS");

  return (
    <>
      <div>Singleplayer</div>
      {/* <p>Name:{selectedPlayer.name}</p>
      <p>Result:{selectedPlayer.result}</p>
      <p>Single Player information</p>
      {games && games.map((game) => <p key={game.id}>{game.result}</p>)} */}

      <h1>{myPlayer.username}</h1>
      <ul>
        {myPlayer.games.map((game) => (
          <li key={game.id}>{game.result}</li>
        ))}
      </ul>
      {/* <h1>{selectedPlayer}</h1> */}
      <Link to="/leaderboard">Back to Players</Link>
    </>
  );
};

export default SinglePlayer;
